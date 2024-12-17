import React from 'react';
import { Box } from '@mui/material';

// Replace this URL with your preferred background image
const backgroundImage = '/images/background.jpeg';

const PageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '20px', // Padding around the edges of the window
      }}
    >
      {/* Black Tint Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black tint
          zIndex: 1,
        }}
      />

      {/* Translucent Box */}
      <Box
        sx={{
          width: '800px', // Fixed width
          maxWidth: '90%', // Responsive for smaller screens
          padding: 4, // Internal padding
          borderRadius: 3, // Rounded corners
          backdropFilter: 'blur(10px)', // Glass-like effect
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Translucent effect
          zIndex: 2,
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;