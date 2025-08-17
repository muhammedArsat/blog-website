import express from "express";
import { errorHandler } from "./middlewares/error-middleware.js";
import morgan from "morgan";
import authRouter from "./routes/auth-routes.js";
import blogRouter from "./routes/blog-routes.js";
import commentRouter from "./routes/comment-routes.js";
import userRouter from "./routes/user-routes.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./configs/passport.js";
import cors from "cors";
import { CLIENT_URL } from "./configs/env.js";
const app = express();
app.use(passport.initialize());
app.use(morgan("dev"));

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/users", userRouter);
app.use(errorHandler);

export default app;
