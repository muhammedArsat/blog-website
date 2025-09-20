import express from "express";
import morgan from "morgan";
import { errorMiddleware } from "./middlewares/error.middleware.js";
export const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use(errorMiddleware);
