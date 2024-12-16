import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Paper } from '@mui/material';
import axios from 'axios';

// Background image URL (replace with your local or hosted image)
const backgroundImage = '/images/background.jpeg';

const Register = () => {
  const [role, setRole] = useState('user'); // 'user' or 'client'
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload;

    if (role === 'user') {
      payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        type: 'user',
      };
    } else {
      payload = {
        org_name: formData.organizationName,
        admin_name: formData.adminName,
        email: formData.email,
        password: formData.password,
        client_type: formData.organizationType,
        type: 'client',
      };
    }

    try {
      const response = await axios.post('http://127.0.0.1:5001/api/auth/register', payload);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

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
    
    
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f4f6f8">
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" textAlign="center" marginBottom={2}>
          Register
        </Typography>
        {/* Role Selection */}
        <FormControl component="fieldset">
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <FormControlLabel value="user" control={<Radio />} label="Register as User" />
            <FormControlLabel value="client" control={<Radio />} label="Register as Client" />
          </RadioGroup>
        </FormControl>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {role === 'user' ? (
            <>
              <TextField name="firstName" label="First Name" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="lastName" label="Last Name" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="email" label="Email Address" type="email" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="confirmPassword" label="Confirm Password" type="password" fullWidth margin="normal" onChange={handleChange} required />
            </>
          ) : (
            <>
              <TextField name="organizationName" label="Organization Name" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="adminName" label="Admin Name" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="email" label="Email Address" type="email" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="organizationType" label="Type of Organization" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} required />
              <TextField name="confirmPassword" label="Confirm Password" type="password" fullWidth margin="normal" onChange={handleChange} required />
            </>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2, paddingX: 5,
                paddingY: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: 8, }}>
            Submit
          </Button>
        </form>

        {/* Response Message */}
        {message && <Typography variant="body1" color="primary" marginTop={2}>{message}</Typography>}
      </Paper>
    </Box>
    </Box>
  );
};

export default Register;