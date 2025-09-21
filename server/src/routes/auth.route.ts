import express from "express";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/upload.middlewares.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", upload.single("avatar"), userRegister);
router.post("/login", userLogin);
router.post("/logout", requireAuth, userLogout);
export default router;
