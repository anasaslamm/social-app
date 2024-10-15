import React from "react";
import { useAuthActionsContext } from "../providers/auth/useAuthContext";
import { Container, Typography, Button, Box } from "@mui/material";

const Home = () => {
  const { logOut } = useAuthActionsContext();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {/* Welcome Text */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          marginBottom: "20px",
        }}
      >
        Welcome to the Home Page!
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          marginBottom: "30px",
          color: "text.secondary",
        }}
      >
        Enjoy exploring and make sure to log out when you're done.
      </Typography>

      {/* Logout Button */}
      <Box>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={logOut}
          sx={{ borderRadius: "20px", padding: "10px 20px" }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
