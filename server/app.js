import express from "express";
import { errorHandler } from "./middlewares/error-middleware.js";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));

app.use(errorHandler);

export default app;
