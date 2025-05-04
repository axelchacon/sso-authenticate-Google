import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const verifySession = async () => {
			try {
				const token = localStorage.getItem("token");
				if (!token) throw new Error("No token");

				const res = await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}/auth/profile`,
					{
						headers: { Authorization: `Bearer ${token}` },
						withCredentials: true,
					}
				);

				if (res.data.success) {
					setUser(res.data.user);
				} else {
					throw new Error(res.data.message);
				}
			} catch (err) {
				localStorage.removeItem("token");
				window.location.href = "/";
			} finally {
				setLoading(false);
			}
		};

		verifySession();
	}, [navigate]);

	const handleLogout = async () => {
		try {
			await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
				{},
				{ withCredentials: true }
			);
		} finally {
			localStorage.removeItem("token");
			window.location.href = "/";
		}
	};

	if (loading) return <div>Cargando...</div>;

	return (
		<div style={{ textAlign: "center", padding: "2rem" }}>
			<h1>¡Bienvenido, {user?.name || "Usuario"}!</h1>
			<p>Email: {user?.email}</p>
			{user?.picture && (
				<img
					src={user.picture}
					alt="Profile"
					style={{ width: 100, borderRadius: "50%" }}
				/>
			)}
			<button
				onClick={handleLogout}
				style={{
					marginTop: "1rem",
					padding: "0.5rem 1rem",
					cursor: "pointer",
				}}>
				Cerrar sesión
			</button>
		</div>
	);
};

export default Dashboard;
