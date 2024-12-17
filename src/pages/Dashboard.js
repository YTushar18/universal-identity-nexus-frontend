import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Paper } from '@mui/material';
import Logout from '../components/Logout';
import PageLayout from '../components/PageLayout';


// Background image URL (replace with your local or hosted image)
const backgroundImage = '/images/background.jpeg';

const Dashboard = () => {
return (
    
    <PageLayout>
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Logout />
    </div>

    </PageLayout>

)
};

export default Dashboard;