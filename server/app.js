import express from "express";
import { errorHandler } from "./middlewares/error-middleware.js";
import morgan from "morgan";
import authRouter from "./routes/auth-routes.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./configs/passport.js";
const app = express();
app.use(passport.initialize());
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use(errorHandler);

export default app;
