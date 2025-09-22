import express from "express";
import {
  userLogin,
  userLogout,
  userProfile,
  userRegister,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/upload.middlewares.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/signup", upload.single("avatar"), userRegister);
router.post("/signin", userLogin);
router.get("/profile",requireAuth,userProfile);
router.post("/signout", requireAuth, userLogout);
export default router;
