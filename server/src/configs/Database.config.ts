import mongoose from "mongoose";
import { DATABASE_URL } from "./Env.js";
import logger from "../log/logger.log.js";
export const connectDB = async () => {
  try {
    if (!DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables");
    }
    await mongoose.connect(DATABASE_URL);
    logger.info("Database connection succeed");
  } catch (err) {
    logger.error("Database connection failed. Error:", err);
    throw err;
  }
};
