import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@emotion/react'; // For animations
import { useNavigate } from 'react-router-dom';
import landingTheme from '../theme/landingTheme';

// Background image URL
const backgroundImage = 'images/background.jpeg';

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
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '20px',
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
            position: 'relative',
            zIndex: 2,
            width: '1200px',
            maxWidth: '90%',
            padding: 4,
            borderRadius: 3,
            backdropFilter: 'blur(10px)', // Glass-like effect
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Translucent effect
            boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.2)', // Subtle shadow
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to 
          </Typography>
          <Typography variant="h2" gutterBottom>
            Universal Identity Nexus
          </Typography>

          <Typography variant="h6" sx={{ color: "white", marginBottom: '40px' }}>
            A secure and centralized platform to manage your personal identity.
          </Typography>

          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 30,
                animation: `${bounce} 2s infinite`,
                '&:hover': {
                  backgroundColor: '#1565c0',
                
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              
              sx={{
                borderRadius: 30,
                animation: `${bounce} 2s infinite 1s`, // Slight delay for staggered effect
                '&:hover': {
                  backgroundColor: '#b71c1c',
                  borderRadius: 30,
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
              onClick={() => navigate('/register')}
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


// import React from 'react';
// import { keyframes } from '@emotion/react'; // For animations
// import { Box, Typography, Button, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const backgroundImage = 'images/background.jpeg';

// // // Keyframe animation for buttons
// const bounce = keyframes`
//   0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//   40% { transform: translateY(-8px); }
//   60% { transform: translateY(-4px); }
// `;

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         height: '100%',
//         overflowY: 'auto', // Enable scrolling only for this page
//         scrollBehavior: 'smooth',
//       }}
//     >
//       {/* Hero Section */}
//       <Box
//         sx={{
//           height: '100vh',
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           textAlign: 'center',
//           color: '#fff',
//           position: 'relative',
//         }}
//       >
//         {/* Black Overlay */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             zIndex: 1,
//           }}
//         />
        
//         <Box sx={{ position: 'relative', zIndex: 2 }}>
//           <Typography variant="h4" gutterBottom>
//             Welcome to
//           </Typography>
//           <Typography variant="h2" gutterBottom>
//             Universal Identity Nexus
//           </Typography>
//           <Typography variant="h6" marginBottom={4}>
//             A secure and centralized platform to manage your personal identity.
//           </Typography>
//           <Box display="flex" justifyContent="center" gap={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{
//                 borderRadius: 30,
//                 animation: `${bounce} 2s infinite`,
//                 '&:hover': {
//                   backgroundColor: '#1565c0',
                
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease-in-out',
//                 },
//               }}
//               onClick={() => navigate('/login')}
//             >
//               Login
//             </Button>
//             <Button
//               variant="contained"
//               color="secondary"
              
//               sx={{
//                 borderRadius: 30,
//                 animation: `${bounce} 2s infinite 1s`, // Slight delay for staggered effect
//                 '&:hover': {
//                   backgroundColor: '#b71c1c',
//                   borderRadius: 30,
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease-in-out',
//                 },
//               }}
//               onClick={() => navigate('/register')}
//             >
//               Register
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       {/* Section 1 */}
//       <Container
//         sx={{
//           paddingY: 10,
//           backgroundColor: '#f9f9f9',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           About the Project
//         </Typography>
//         <Typography variant="body1" marginBottom={4}>
//           Universal Identity Nexus is a platform that enables centralized management of personal data securely.
//         </Typography>
//         <img
//           src="https://source.unsplash.com/600x400/?technology"
//           alt="Project"
//           style={{ maxWidth: '100%', borderRadius: '8px' }}
//         />
//       </Container>

//       {/* Section 2 */}
//       <Container
//         sx={{
//           paddingY: 10,
//           backgroundColor: '#e8f5e9',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Features
//         </Typography>
//         <Typography variant="body1" marginBottom={4}>
//           - User Management <br /> - Data Management <br /> - Consent Management <br /> - Security and Transparency
//         </Typography>
//         <img
//           src="https://source.unsplash.com/600x400/?security"
//           alt="Features"
//           style={{ maxWidth: '100%', borderRadius: '8px' }}
//         />
//       </Container>

//       {/* Section 3 */}
//       <Container
//         sx={{
//           paddingY: 10,
//           backgroundColor: '#fff8e1',
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Get Started
//         </Typography>
//         <Typography variant="body1" marginBottom={4}>
//           Register today to explore the Universal Identity Nexus platform.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => navigate('/register')}
//         >
//           Register Now
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default LandingPage;