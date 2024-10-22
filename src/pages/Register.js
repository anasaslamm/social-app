import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const loginto = () => {
    navigate("/auth/login");
  };
  return (
    <React.Fragment>
      <Container sx={{ padding: "30px" }}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h3" sx={{ margin: 4 }}>
            Register
          </Typography>
          <TextField label="Email or username" />
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Password" type="password" />
          <TextField label="Confirm Password" type="password" />

          <Button onClick={loginto}>Login Page</Button>
          <Button variant="contained">Submit</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Register;
