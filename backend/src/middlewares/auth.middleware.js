import { verifyToken } from "../utils/jwt.js";

export const authenticateJWT = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({
			success: false,
			message: "No token provided",
			redirectTo: "/",
		});
	}

	try {
		const decoded = verifyToken(token);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(403).json({
			success: false,
			message: "Invalid or expired token",
			redirectTo: "/",
		});
	}
};
