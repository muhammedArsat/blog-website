import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import { errorMiddleware } from "./middlewares/error.middleware.js";
import Authrouter from "./routes/auth.route.js";
export const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/auth", Authrouter);
app.use(errorMiddleware);

