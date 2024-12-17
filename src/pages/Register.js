import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";
import PageLayout from "../components/PageLayout";

import {
  TextField,
  Button,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const Register = () => {
  const [role, setRole] = useState("user"); // 'user' or 'client'
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload;

    if (role === "user") {
      payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        type: "user",
      };
    } else {
      payload = {
        org_name: formData.organizationName,
        admin_name: formData.adminName,
        email: formData.email,
        password: formData.password,
        client_type: formData.organizationType,
        type: "client",
      };
    }

    try {
      const response = await axiosInstance.post(`/auth/register`, payload); // Updated
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <PageLayout>
      <Typography
        variant="h5"
        textAlign="center"
        marginBottom={2}
        sx={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        }}
      >
        Register
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup row value={role} onChange={(e) => setRole(e.target.value)}>
          <FormControlLabel
            value="user"
            control={<Radio />}
            label="Register as User"
            sx={{ color: "white", fontWeight: "bold" }}
          />
          <FormControlLabel
            value="client"
            control={<Radio />}
            label="Register as Client"
            sx={{ color: "white", fontWeight: "bold" }}
          />
        </RadioGroup>
      </FormControl>

      <form onSubmit={handleSubmit}>
        {role === "user" ? (
          <>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              sx={{ borderRadius: 8, border: "white" }}
              onChange={handleChange}
              required
            />
          </>
        ) : (
          <>
            <TextField
              name="organizationName"
              label="Organization Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="adminName"
              label="Admin Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="organizationType"
              label="Type of Organization"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </>
        )}
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              paddingX: 5,
              paddingY: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: 8,
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </PageLayout>
  );
};

export default Register;
