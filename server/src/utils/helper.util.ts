import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../configs/Env.js";
import { CustomError } from "../middlewares/error.middleware.js";
interface JwtPayload {
  userId: string;
  email: string;
  name: string;
  avatar: string;
}
export const generateJwtToken = (payload: JwtPayload) => {
  if (!SECRET_KEY) {
    const err: CustomError = new Error("Secret key is missing");
    err.statusCode = 500;
    throw err;
  }

  return jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });
};
