import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';
import React from 'react';
import './LoginPage.css';
import { useForm } from 'react-hook-form';
import LoginModel from '../models/Login';
import { loginUser } from '../services/authService';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';



const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginModel>();

    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            const res = await loginUser(data);
            login(res); // assuming the API returns { token }
            navigate('/home');
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    return (
        // <div className="login-page d-flex justify-content-center align-items-center">
        //     <div className="login-card p-4 rounded shadow bg-white">
        //         <h2 className="text-center mb-4">Login</h2>
        //         <form onSubmit={handleSubmit(onSubmit)} >
        //             <div className="mb-3">
        //                 <label htmlFor="userid" className="form-label">UserID</label>
        //                 <input type="text" className="form-control" id="userId" placeholder="Enter userid"
        //                     {...register('userid', { required: 'UserID is required' })}
        //                 />
        //                 {errors.userid && <p className="text-danger">{errors.userid.message}</p>}
        //             </div>
        //             <div className="mb-3">
        //                 <label htmlFor="password" className="form-label">Password</label>
        //                 <input type="password" className="form-control" id="password" placeholder="Password" {...register('password', {
        //                     required: 'Password is required',
        //                     minLength: {
        //                         value: 3,
        //                         message: 'Password must be at least 3 characters'
        //                     }
        //                 })}
        //                 />
        //                 {errors.password && <p className="text-danger">{errors.password.message}</p>}
        //             </div>
        //             <button type="submit" className="btn btn-primary w-100">Login</button>
        //         </form>
        //     </div>
        // </div>

         <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate 
      
      >
        <TextField
          fullWidth
          label="userid"
          margin="normal"
          {...register('userid', { required: 'userid is required' })}
          error={!!errors.userid}
          helperText={errors.userid?.message}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 3, message: 'Minimum 3 characters' },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Paper>
    );
};



export default Login;
