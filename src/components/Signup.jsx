import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-b0do.onrender.com/auth/register", formData);
      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      alert("Error signing up: " + error.response.data.detail);
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f1f7fe",
    },
    formBox: {
      maxWidth: "400px",
      width: "100%",
      background: "#ffffff",
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.6rem",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "12px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "12px",
      border: "none",
      borderRadius: "24px",
      fontSize: "1rem",
      cursor: "pointer",
      width: "100%",
      marginTop: "12px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    footer: {
      marginTop: "16px",
      fontSize: "0.9rem",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Sign up</h2>
          <p style={styles.subtitle}>Create a free account with your email.</p>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            onChange={handleChange}
          />
          <button type="submit" style={styles.button}>
            Sign up
          </button>
        </form>
        <div style={styles.footer}>
          <p>
            Have an account?{" "}
            <a href="/" style={styles.link}>
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
