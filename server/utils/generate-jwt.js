import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../configs/env.js";
const createJwtToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
};
export default createJwtToken;
