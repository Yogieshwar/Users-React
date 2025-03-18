import React from "react";

const LoadingSpinner = () => {
  const styles = {
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor:"black"
    },
    skChase: {
      width: "40px",
      height: "40px",
      position: "relative",
      animation: "sk-chase 2.5s infinite linear both",
    },
    skChaseDot: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      animation: "sk-chase-dot 2s infinite ease-in-out both",
    },
    skChaseDotBefore: {
      content: '""',
      display: "block",
      width: "25%",
      height: "25%",
      backgroundColor: "#007bff", // Blue color
      borderRadius: "50%",
      animation: "sk-chase-dot-before 2s infinite ease-in-out both",
    },
  };

  return (
    <div style={styles.loadingContainer}>
      <div style={styles.skChase}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.skChaseDot,
              animationDelay: `-${1.1 - index * 0.1}s`,
            }}
          >
            <div style={styles.skChaseDotBefore}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Adding keyframes using a <style> tag in JSX
const keyframes = `
  @keyframes sk-chase {
    100% { transform: rotate(360deg); }
  }

  @keyframes sk-chase-dot {
    80%, 100% { transform: rotate(360deg); }
  }

  @keyframes sk-chase-dot-before {
    50% { transform: scale(0.4); }
    100%, 0% { transform: scale(1); }
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = keyframes;
document.head.appendChild(styleTag);

export default LoadingSpinner;
