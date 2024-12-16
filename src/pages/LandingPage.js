import React from 'react';
import { Box, Button, Typography, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

// Background image URL (replace with your local or hosted image)
const backgroundImage = '/images/background.jpeg';

// Keyframe animation for buttons
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', // Parallax effect
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        }}
      />

      {/* Content */}
      <Fade in timeout={1500}>
        <Box sx={{ position: 'relative', zIndex: 2, animation: 'fadeIn 2s' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: '2px', textShadow: '5px 5px 15px rgba(0, 0, 0, 0.8)' }}>
            Welcome to Universal Identity Nexus
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 4, textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>
            A secure and centralized platform to manage your personal identity.
          </Typography>

          <Box display="flex" gap={3} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/login')}
              sx={{
                paddingX: 5,
                paddingY: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: 8,
                animation: `${bounce} 2s infinite`,
                '&:hover': {
                  backgroundColor: '#1565c0',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                  textShadow: '5px 5px 15px rgba(0, 0, 0, 0.8)'
                },
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/register')}
              sx={{
                paddingX: 5,
                paddingY: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: 8,
                textShadow: 'px 5px 15px rgba(0, 0, 0, 0.8)',
                animation: `${bounce} 2s infinite 1s`,
                
                '&:hover': {
                  backgroundColor: '#d32f2f',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                  textShadow: '5px 5px 15px rgba(0, 0, 0, 0.8)'
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default LandingPage;