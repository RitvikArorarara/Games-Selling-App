import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, CircularProgress, Alert } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/signin",
        {
          email,
          password,
        }
      );
     
      localStorage.setItem('token', response.data.token);
      navigate("/allgames");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred during sign in"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex flex-col items-center mb-6">
          <LockOutlined className="text-primary-600 text-4xl mb-2" />
          <h1 className="text-2xl font-bold">Sign In</h1>
        </div>
        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}
        <form onSubmit={handleSignIn} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            className="py-2"
          >
            {loading ? <CircularProgress size={24} /> : "Sign In"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-primary-600 hover:underline">
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
