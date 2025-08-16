import express from "express";
import {
  getMe,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/auth-controller.js";
import { verifyToken } from "../middlewares/auth-middleware.js";
import passport from "passport";
import createJwtToken from "../utils/generate-jwt.js";
import { NODE_ENV } from "../configs/env.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/user", userLogout);
router.get("/user", verifyToken, getMe);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const payload = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      profileImg: req.user.profileImg,
    };

    const token = createJwtToken(payload);
    res.cookie("token", token, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: NODE_ENV === "production" ? "lax" : "none",
      path: "/",
      maxAge: 360 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      token,
      user: payload,
      message: "Google OAuth login successfull",
    });
  }
);
export default router;
