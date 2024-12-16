import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Paper } from '@mui/material';
import Logout from '../components/Logout';


// Background image URL (replace with your local or hosted image)
const backgroundImage = '/images/background.jpeg';

const Dashboard = () => {
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

    <div>
      <h1>Welcome to the Dashboard</h1>
      <Logout />
    </div>

            </Box>

)
};

export default Dashboard;