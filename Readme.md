## 📝 Guía para Obtener Credenciales de Google OAuth 2.0
### 🔑 Paso 1: Acceder a Google Cloud Console
Ve a Google Cloud Console : https://console.cloud.google.com

Selecciona tu proyecto (tecsupautenticath en tu caso)

Navega a: APIs y Servicios > Credenciales

### Paso 2: Configuración Inicial
Descripción General
Navega a "APIs y servicios" > "Pantalla de consentimiento de OAuth"

Selecciona el tipo de usuario (Interno o Externo)

Completa los campos obligatorios:

Nombre de la aplicación

Correo electrónico de soporte

Logo de la aplicación (opcional)

Haz clic en "Guardar y continuar"

### Paso 3: Desarrollo de la Marca
En la sección "Desarrollo de la marca":

Sube un logo de alta calidad (mínimo 128x128 px)

Configura los colores principales de la marca

Agrega enlaces a políticas de privacidad y términos de servicio

Haz clic en "Guardar y continuar"

### Paso 4: Configuración de Clientes OAuth
Navega a "APIs y servicios" > "Credenciales"

Haz clic en "+ Crear credenciales" y selecciona "ID de cliente OAuth"

Configuración del Cliente
Tipo de aplicación: Selecciona el tipo adecuado (Web, Android, iOS, etc.)

Para aplicaciones web: selecciona "Aplicación web"

Nombre del cliente:

Ingresa un nombre descriptivo (ej. "Cliente web 1")

Este nombre solo es visible en la consola

Orígenes autorizados de JavaScript (para aplicaciones web):

Agrega todas las URLs desde donde se harán solicitudes

Ejemplo: https://tudominio.com

URIs de redireccionamiento autorizados:

Agrega los endpoints de callback de tu aplicación

Ejemplo: https://tudominio.com/auth/google/callback

Haz clic en "Crear"

### Paso 5: Obtención de Credenciales
Después de crear el cliente, Google mostrará:

ID de cliente: Identificador único de tu aplicación

Secreto de cliente: Credencial secreta para autenticar

⚠️ Importante:

Guarda el secreto de cliente de forma segura (no se mostrará nuevamente)

La configuración puede tardar hasta algunas horas en propagarse

### En tu archivo `.env` del backend:
GOOGLE_CLIENT_ID=848301810920-e-r1...  # Copia el ID de tu imagen
GOOGLE_CLIENT_SECRET=GOCSPX-...       # Se muestra al crear las credenciales

### En tu frontend (.env):
VITE_GOOGLE_CLIENT_ID=848301810920-e-r1...  # Mismo ID que arriba