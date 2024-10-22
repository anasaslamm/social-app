// ForgetPassword.js
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forget password logic here (e.g., send email to reset password)
    console.log("Reset link sent to:", email);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Forget Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
