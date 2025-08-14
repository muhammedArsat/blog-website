import mongoose from "mongoose";
import { DATABASE_URL } from "./env.js";
import logger from "../log/logger.js";
export const connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(DATABASE_URL);
    logger.info("Database connected successfully");
  } catch (err) {
    next(err);
  }
};
