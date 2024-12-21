import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import "./index.css";
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Route */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;