import logger from "../log/logger.js";
export const errorHandler = async (err, req, res, next) => {
  logger.error(err.stack);
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error ",
  });
};
