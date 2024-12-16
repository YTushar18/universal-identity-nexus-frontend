import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        {/* Placeholder for Login */}
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;