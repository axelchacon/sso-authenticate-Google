import app from "./app.js";
import pool from "./config/db.js";

const PORT = process.env.PORT || 4000;

// Verificar conexión a la base de datos
pool.query("SELECT NOW()", (err) => {
	if (err) {
		console.error("Error connecting to PostgreSQL:", err);
	} else {
		console.log("Connected to PostgreSQL");
	}
});

// Crear tabla de usuarios si no existe

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    google_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    picture TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  );
`;

pool
	.query(createTableQuery)
	.then(() => console.log("Users table verified"))
	.catch((err) => console.error("Error creating users table:", err));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
