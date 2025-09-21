import { Request, Response, NextFunction } from "express";
import logger from "../log/logger.log.js";

export interface CustomError extends Error {
  statusCode?: number;
}
export const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Error: ${err.message}`);
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
