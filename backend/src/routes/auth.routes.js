import express from "express";
import {
	googleAuth,
	getUserProfile,
	logout,
} from "../controllers/auth.controller.js";
import { authenticateJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/google", googleAuth);
router.get("/profile", authenticateJWT, getUserProfile);
router.post("/logout", authenticateJWT, logout);

export default router;
