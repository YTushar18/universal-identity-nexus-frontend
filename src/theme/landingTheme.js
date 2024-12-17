import { createTheme } from '@mui/material/styles';

const landingTheme = createTheme({
  typography: {
    h2: {
      color: '#f5f5f5', // Primary heading color
      fontWeight: 'bold',
      letterSpacing: '4px',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // Optional text shadow
    },
    h4: {
      color: '#f5f5f5', // Primary heading color
      fontWeight: 'bold',
      letterSpacing: '2px',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', // Optional text shadow
    },
    h6: {
      color: '#ffcc00', // Subheading color
      textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
    },
    button: {
      textTransform: 'none', // Prevents uppercase text on buttons
    },
  },
  palette: {
    primary: {
      main: '#1e88e5', // Blue for "Login" button
    },
    secondary: {
      main: '#d32f2f', // Red for "Register" button
    },
  },
});

export default landingTheme;