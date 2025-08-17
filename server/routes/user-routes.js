import e from "express";
import { verifyToken } from "../middlewares/auth-middleware.js";
import { getUserInfo, updateUser } from "../controllers/user-controller.js";
const router = e.Router();

router.get("/:id", verifyToken, getUserInfo);
router.put("/:id", verifyToken, updateUser);

export default router;
