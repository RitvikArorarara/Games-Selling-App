import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, CircularProgress, Alert } from '@mui/material';
import { PersonAddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/signup', formData);
      if (response.data.message === 'Sign up Success') {
      navigate('/signin');
      } else {
        setError(response.data.message || 'An error occurred during sign up');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex flex-col items-center mb-6">
          <PersonAddOutlined className="text-primary-600 text-4xl mb-2" />
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </div>
        {error && <Alert severity="error" className="mb-4">{error}</Alert>}
        <form onSubmit={handleSignUp} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signin" className="text-primary-600 hover:underline">
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


