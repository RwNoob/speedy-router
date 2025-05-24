import { styled } from "speedy-jsx";

export const setupGlobalStyles = () => {
  styled.global({
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#f5f7fa",
      color: "#333",
      lineHeight: "1.6",
      height: "100%",
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "#app": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
    },
    button: {
      fontFamily: "inherit",
      fontSize: "14px",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.3s ease",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  });
};

export const fadeIn = styled.keyframes({
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});
