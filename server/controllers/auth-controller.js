import User from "../models/user-model.js";
import createJwtToken from "../utils/generate-jwt.js";
import { NODE_ENV } from "../configs/env.js";
export const userRegister = async (req, res, next) => {
  try {
    const { name, email, password, gender, phone, job } = req.body;

    if (!name || !email || !password || !gender || !phone) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findOne({ email });
    if (user) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }
    const newUser = new User({
      name,
      email,
      password,
      gender,
      phone,
      job,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!email || !password) {
      const error = new Error("Email and Password fields are required");
      error.statusCode = 400;
      throw error;
    }
    if (!user) {
      const error = new Error("User is not existed");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      const error = new Error("Invalid credentials");
      error.statusCode = 401;
      throw error;
    }

    user.password = undefined;

    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
      profileImg: user.profileImg,
    };
    const token = createJwtToken(payload);
    res.cookie("token", token, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: NODE_ENV === "production" ? "Lax" : "None",
      path: "/",
      maxAge: 360 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      success: true,
      token,
      message: "User logged in successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const userLogout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: NODE_ENV === "production" ? "Lax" : "None",
    path: "/",
  });

  return res.status(200).json({
    success: true,
    message: "Cookie cleared successfully",
  });
};

export const getMe = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(200).json({
      success: true,
      id: user.id,
      name: user.name,
      email: user.email,
      profileImg: user.profileImg,
    });
  } catch (err) {
    next(err);
  }
};
