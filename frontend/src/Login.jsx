import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
        { token: credentialResponse.credential },
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        window.location.href = res.data.redirectTo;
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <div style={styles.header}>
          <h1 style={styles.title}>Bienvenido</h1>
          <p style={styles.subtitle}>Inicia sesión para continuar</p>
        </div>
        
        <div style={styles.googleButtonContainer}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => alert("Error en el login de Google")}
            theme="filled_blue"
            size="large"
            shape="pill"
            width="300"
            logo_alignment="center"
            text="signin_with" // Cambia a "continue_with" si prefieres
          />
        </div>
        
        <div style={styles.footer}>
          <p style={styles.footerText}>Protegido por Google</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px"
  },
  loginCard: {
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    padding: "40px",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center"
  },
  header: {
    marginBottom: "32px"
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "8px"
  },
  subtitle: {
    fontSize: "16px",
    color: "#718096",
    margin: 0
  },
  googleButtonContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "24px 0"
  },
  footer: {
    marginTop: "24px",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "16px"
  },
  footerText: {
    fontSize: "14px",
    color: "#a0aec0",
    margin: 0
  }
};

export default Login;