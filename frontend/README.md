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

# Frontend de Autenticación con Google

## 🛠 Tecnologías utilizadas
- React (Vite)
- React Router
- Axios
- Google OAuth 2.0 Client

## 📦 Instalación y Configuración

### 1. Instalación de Dependencias
```bash
# Dependencias principales
npm install react react-dom react-router-dom axios @react-oauth/google

# Dependencias de desarrollo
npm install --save-dev vite @vitejs/plugin-react
```

### 2. Configuración del Entorno
Crear archivo `.env` en la raíz del proyecto con las siguientes variables:
```
VITE_BACKEND_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=tu_client_id
```

### 3. Estructura del Proyecto
```
└── src/
    ├── App.jsx         # Encargado del ruteo entre Login y Dashboard
    ├── main.jsx        # Punto de entrada de React
    ├── Login.jsx       # Componente de login con Google
    └── Dashboard.jsx   # Vista protegida que requiere autenticación
```

## 🚀 Iniciar la Aplicación

1. Asegúrate de tener el backend corriendo en el puerto 3000
2. Ejecuta el siguiente comando:
```bash
npm run dev
```

La aplicación se iniciará en `http://localhost:5173`

## 🔐 Flujo de Autenticación
1. El usuario hace clic en "Iniciar sesión con Google"
2. Se redirige a la página de autenticación de Google
3. Después de autenticarse, Google redirige de vuelta a la aplicación
4. El frontend envía el token de Google al backend
5. El backend valida el token y devuelve un JWT
6. El frontend almacena el JWT y redirige al Dashboard

## 📝 Notas Importantes
- Asegúrate de que el `VITE_GOOGLE_CLIENT_ID` coincida con el ID de cliente configurado en Google Cloud Console
- La URL de redirección en Google Cloud Console debe ser: `http://localhost:5173`
- El backend debe estar configurado para aceptar peticiones desde `http://localhost:5173`