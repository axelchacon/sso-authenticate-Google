import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
	const isAuthenticated = localStorage.getItem("token") !== null;

	return (
		<Routes>
			<Route
				path="/"
				element={
					isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
				}
			/>
			<Route
				path="/dashboard"
				element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
			/>
		</Routes>
	);
};

export default App;
