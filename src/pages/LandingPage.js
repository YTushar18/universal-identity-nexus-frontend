import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { keyframes } from "@emotion/react"; // For animations
import { useNavigate } from "react-router-dom";
import landingTheme from "../theme/landingTheme";

// Background image URL
const backgroundImage = "images/background.jpeg";

// Keyframe animation for buttons
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={landingTheme}>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "20px",
        }}
      >
        {/* Black Tint Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black tint
            zIndex: 1,
          }}
        />

        {/* Translucent Box */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "1200px",
            maxWidth: "90%",
            padding: 4,
            borderRadius: 3,
            backdropFilter: "blur(10px)", // Glass-like effect
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Translucent effect
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.2)", // Subtle shadow
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to
          </Typography>
          <Typography variant="h2" gutterBottom>
            Universal Identity Nexus
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "white", marginBottom: "40px" }}
          >
            A secure and centralized platform to manage your personal identity.
          </Typography>

          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 30,
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                animation: `${bounce} 2s infinite`,
                "&:hover": {
                  backgroundColor: "#1565c0",

                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                borderRadius: 30,
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                animation: `${bounce} 2s infinite 1s`, // Slight delay for staggered effect
                "&:hover": {
                  backgroundColor: "rgb(33, 92, 53)",
                  borderRadius: 30,
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
