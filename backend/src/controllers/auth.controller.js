import { OAuth2Client } from "google-auth-library";
import { findOrCreateUser, getUserById } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
	const { token } = req.body;

	try {
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});

		const payload = ticket.getPayload();
		const { sub: google_id, email, name, picture } = payload;

		const user = await findOrCreateUser({ google_id, email, name, picture });
		const jwtToken = generateToken(user);

		res.cookie("token", jwtToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 3600000, // 1 hora
			sameSite: "lax",
			path: "/",
		});

		res.status(200).json({
			success: true,
			user: { id: user.id, email, name, picture },
			redirectTo: "/dashboard",
		});
	} catch (err) {
		console.error("Error en autenticación con Google:", err);
		res.status(401).json({
			success: false,
			message: "Authentication failed",
			redirectTo: "/",
		});
	}
};

export const getUserProfile = async (req, res) => {
	try {
		const user = await getUserById(req.user.id);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
				redirectTo: "/",
			});
		}
		res.json({ success: true, user });
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server error",
			redirectTo: "/",
		});
	}
};

export const logout = (req, res) => {
	res.clearCookie("token", {
		path: "/",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
	});
	res.status(200).json({
		success: true,
		message: "Logged out successfully",
		redirectTo: "/",
	});
};
