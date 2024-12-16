import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleLogout}
      sx={{ marginTop: 2 }}
    >
      Logout
    </Button>
  );
};

export default Logout;