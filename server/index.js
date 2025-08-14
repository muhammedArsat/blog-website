import app from "./app.js";
import { connectDB } from "./configs/db-config.js";
import { PORT } from "./configs/env.js";
import logger from "./log/logger.js";
connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`server running on http://localhost:${PORT}`);
  });
});
