import React from "react";

const Dashboard = () => {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#1a1a3d",
      color: "#ffffff",
      fontFamily: "'Arial', sans-serif",
    },
  
    
  
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      margin: "0",
    },
    subtitle: {
      fontSize: "1.2rem",
      margin: "10px 0 30px 0",
    },
    button: {
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#ff4233",
      backgroundColor: "transparent",
      border: "2px solid #ff4233",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#ff4233",
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}


      {/* Main Content */}
      <h1 style={styles.title}>Wexa's Quiz</h1>
      <p style={styles.subtitle}>
        Welcome to Wexa's Quiz game. 
      </p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff4233", e.target.style.color = "#ffffff")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#ff4233")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Dashboard;
