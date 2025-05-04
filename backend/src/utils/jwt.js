import jwt from "jsonwebtoken";

export const generateToken = (user) => {
	return jwt.sign(
		{ id: user.id, google_id: user.google_id, email: user.email }, // Añade google_id
		process.env.JWT_SECRET,
		{ expiresIn: "1h" }
	);
};

export const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};
