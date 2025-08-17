import User from "../models/user-model.js";

export const getUserInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    return res.status(200).json({
      sucess: true,
      message: "User data fetched",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email, job, gender, phone } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (job) user.job = job;
    if (gender) user.gender = gender;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated",
      data: {
        user,
      },
    });
  } catch (err) {
    throw err;
  }
};


