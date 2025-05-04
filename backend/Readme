No es neecsario un "JWT_SECRET" en .env

backend/
├── node_modules/
├── src/
│ ├── config/
│ │ └── db.js # Configuración de PostgreSQL
│ ├── controllers/
│ │ └── auth.controller.js # Controlador de autenticación
│ ├── middlewares/
│ │ └── auth.middleware.js # Middleware de autenticación JWT
│ ├── models/
│ │ └── user.model.js # Modelo de usuario
│ ├── routes/
│ │ └── auth.routes.js # Rutas de autenticación
│ ├── utils/
│ │ └── jwt.js # Utilidades JWT
│ ├── app.js # Configuración principal de Express
│ └── server.js # Punto de entrada del servidor
├── .env # Variables de entorno
├── package.json
└── package-lock.json

### npm install express cors dotenv jsonwebtoken passport passport-google-oauth20 pg

### npm install express cors dotenv axios jsonwebtoken pg bcryptjs google-auth-library

### crea el código con node JWT: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

### CREATE DATABASE google_auth_db;

\c google_auth_db

<!--
CREATE TABLE users (
id SERIAL PRIMARY KEY,
google_id TEXT UNIQUE NOT NULL,
name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL
); -->

CREATE TABLE users (
id SERIAL PRIMARY KEY,
google_id TEXT UNIQUE NOT NULL,  
 email TEXT UNIQUE NOT NULL,  
 name TEXT,  
 picture TEXT,  
 created_at TIMESTAMP DEFAULT NOW()
);



# Backend de Autenticación con Google OAuth 2.0

## 🛠 Tecnologías utilizadas
- Node.js (v18+)
- Express
- PostgreSQL
- Google Auth Library

## 📦 Dependencias principales
```
npm install express pg google-auth-library jsonwebtoken cors cookie-parser dotenv

## 🔧 Dependencias de desarrollo

npm install --save-dev nodemon


## Si quieres usar otro user en vez de postges: 
psql -U tu_user_de_postgresql -d name_databse

## 🚀 Configuración
Crear archivo .env con:

PORT=4000
GOOGLE_CLIENT_ID=tu_client_id
GOOGLE_CLIENT_SECRET=tu_client_secret
JWT_SECRET=tu_secreto_jwt
DB_USER=tu_user
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=google_auth_db


## Iniciar servidor:
npm run dev

## 🌐 Endpoints
POST /auth/google - Autenticación con Google

GET /auth/profile - Perfil de usuario

POST /auth/logout - Cerrar sesión