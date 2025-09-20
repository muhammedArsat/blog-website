import { app } from "./app.js";
import { PORT } from "./configs/Env.js";
import { connectDB } from "./configs/Database.config.js";
import logger from "./log/logger.log.js";
connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`server is running on port : http://localhost:${PORT}`);
  });
});
