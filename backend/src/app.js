import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
		exposedHeaders: ["Content-Disposition"],
	})
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		success: false,
		message: "Internal Server Error",
	});
});

export default app;
