import { Request, Response, NextFunction } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { CustomError } from "../middlewares/error.middleware.js";
import { uploadImage } from "../configs/cloudinary.config.js";
import { generateJwtToken } from "../utils/helper.util.js";
import { NODE_ENV } from "../configs/Env.js";



interface AuthorizedHeader extends Request{
  user?:any
}
//@desc create a new user
//@route POST /api/v1/auth/register
//@access PUBLIC
export const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error: CustomError = new Error();
      error.statusCode = 409;
      error.message = "User already existed";
      throw error;
    }
    let avatar = { public_id: "", url: "" };
    if (req.file) {
      avatar = await uploadImage(req.file.buffer, req.file.mimetype);
    } else {
      const error: CustomError = new Error("Avatar file is required");
      error.statusCode = 400;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
      avatar,
    });

    const payload = {
      userId: String(user._id),
      name: user.name,
      email: user.email,
      avatar: user.avatar.url,
    };
    const token = generateJwtToken(payload);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: NODE_ENV === "production" ? "strict" : "lax",
      secure: NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      success: true,
      message: "User account created successfully",
    });
  } catch (err) {
    next(err);
  }
};

//@desc login a user
//@route POST /api/v1/auth/login
//@access PUBLIC
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const err: CustomError = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      const err: CustomError = new Error("Invalid credentials");
      err.statusCode = 401;
      throw err;
    }
    const payload = {
      userId: String(user._id),
      email: user.email,
      name: user.name,
      avatar: user.avatar.url,
    };
    const token = generateJwtToken(payload);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: NODE_ENV === "production" ? "strict" : "lax",
      secure: NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};

//@desc details of the logged user
//@route GET /api/v1/auth/profile
//@access PROTECTED
export const userProfile = (req:AuthorizedHeader, res:Response)=>{
    const user = req.user;
    return res.status(200).json({
      success:true,
      message:"Profile fetched successfully",
      name:user.name,
      email:user.email,
      avatar:user.avatar,
     
    })
}


//@desc logout a user
//@route POST /api/v1/auth/logout
//@access PROTECTED
export const userLogout = async (req: Request, res: Response) => {
   res.clearCookie("token", {
    httpOnly: true,
    sameSite: NODE_ENV === "production" ? "strict" : "lax",
    secure: NODE_ENV === "production",
    path: "/",
  });
  return res.status(200).json({
    success:true,
    message:"User logged out successfully"
  })
};
