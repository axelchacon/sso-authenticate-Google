import pool from "../config/db.js";

export const findOrCreateUser = async (userData) => {
	const { google_id, email, name, picture } = userData;

	// Verificar si el usuario ya existe por google_id o email
	const userExists = await pool.query(
		"SELECT * FROM users WHERE google_id = $1 OR email = $2",
		[google_id, email]
	);

	if (userExists.rows.length > 0) {
		return userExists.rows[0];
	}

	// Crear nuevo usuario con google_id
	const newUser = await pool.query(
		`INSERT INTO users (google_id, email, name, picture) 
	   VALUES ($1, $2, $3, $4) RETURNING *`,
		[google_id, email, name, picture]
	);

	return newUser.rows[0];
};

export const getUserById = async (id) => {
	const user = await pool.query(
		"SELECT id, email, name, picture FROM users WHERE id = $1",
		[id]
	);
	return user.rows[0];
};
