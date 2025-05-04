### npm install react-router-dom axios jwt-decode

### npm install nodemon --save-dev

### npm install react-router-dom axios jwt-decode


### psql -U axelprogramador2023 -d google_sso_auth_db

### Estructura

└── src/
    ├── App.jsx         ← Encargado del ruteo entre Login y Dashboard
    ├── main.jsx        ← Punto de entrada de React
    ├── Login.jsx       ← Donde haces el login con Google y se envía el token al backend
    └── Dashboard.jsx   ← Vista que solo se muestra si el JWT está presente """

### # Frontend de Autenticación con Google

## 🛠 Tecnologías utilizadas
- React (Vite)
- React Router
- Axios
- Google OAuth 2.0 Client

## 📦 Dependencias principales
```bash
npm install react react-dom react-router-dom axios @react-oauth/google

## 🔧 Dependencias de desarrollo

npm install --save-dev vite @vitejs/plugin-react

## 🚀 Configuración

Crear archivo .env con:

VITE_BACKEND_URL=http://localhost:4000
VITE_GOOGLE_CLIENT_ID=tu_client_id

## Iniciar aplicación:

npm run dev