import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../configs/env.js";
export const verifyToken = async (req, res, next) => {
  try {

    const token = req.cookies.token;
    if(!token){
      const error = new Error('You are un-authorized');
      error.statusCode = 401;
      throw error;
    }

    const decoded = jwt.verify(token,SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};
