import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "/auth/login",
        formData
      );
      const { access_token, refresh_token, user_id } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("user_id", user_id);

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <Typography variant="h5" textAlign="center" marginBottom={2}>
        Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email Address"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
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
            }}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>
        </Box>
      </form>
    </PageLayout>
  );
};

export default Login;
