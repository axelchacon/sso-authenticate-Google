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
- JWT para autenticación

## 📦 Instalación y Configuración

### 1. Instalación de Dependencias
```bash
# Dependencias principales
npm install express pg google-auth-library jsonwebtoken cors cookie-parser dotenv

# Dependencias de desarrollo
npm install --save-dev nodemon
```

### 2. Configuración de la Base de Datos
```sql
CREATE DATABASE google_auth_db;

\c google_auth_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    google_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    picture TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Configuración del Entorno
Crear archivo `.env` en la raíz del proyecto con las siguientes variables:
```
PORT=3000
GOOGLE_CLIENT_ID=tu_client_id
GOOGLE_CLIENT_SECRET=tu_client_secret
FRONTEND_URL=http://localhost:5173
DB_USER=tu_user
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=google_auth_db
```

## 🚀 Iniciar el Servidor
```bash
npm run dev
```

## 📁 Estructura del Proyecto
```
backend/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.js          # Configuración de PostgreSQL
│   ├── controllers/
│   │   └── auth.controller.js  # Controlador de autenticación
│   ├── middlewares/
│   │   └── auth.middleware.js  # Middleware de autenticación JWT
│   ├── models/
│   │   └── user.model.js       # Modelo de usuario
│   ├── routes/
│   │   └── auth.routes.js      # Rutas de autenticación
│   ├── utils/
│   │   └── jwt.js             # Utilidades JWT
│   ├── app.js                 # Configuración principal de Express
│   └── server.js             # Punto de entrada del servidor
├── .env
├── package.json
└── package-lock.json
```

## 🌐 Endpoints Disponibles
- `POST /auth/google` - Autenticación con Google
- `GET /auth/profile` - Obtener perfil del usuario autenticado
- `POST /auth/logout` - Cerrar sesión

## 🔐 Flujo de Autenticación
1. El frontend redirige al usuario a la página de autenticación de Google
2. Google autentica al usuario y devuelve un token
3. El frontend envía el token al backend
4. El backend valida el token con Google
5. Si es válido, crea o actualiza el usuario en la base de datos
6. Genera un JWT y lo devuelve al frontend

## 📝 Notas Importantes
- Asegúrate de que las credenciales de Google estén correctamente configuradas
- La URL de redirección en Google Cloud Console debe ser: `http://localhost:3000/auth/google/callback`
- El frontend debe estar configurado para hacer peticiones a `http://localhost:3000`
- Para acceder a la base de datos con un usuario diferente:
  ```bash
  psql -U tu_user_de_postgresql -d google_auth_db
  ```