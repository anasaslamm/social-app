import React, { useState } from "react";
import { useAuthActionsContext } from "../providers/auth/useAuthContext";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const Login = () => {
  const { setUser } = useAuthActionsContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate login - Normally, you'd fetch user data from an API
    const userData = {
      name: "John Doe",
      email: email,
    };

    setUser(userData); // This sets the user in the context

    // Optionally, you can redirect the user to the homepage after login
    window.location.href = "/";
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px 0", marginTop: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
