// LandingPage.js
import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to SocialApp
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Connect with your friends, share your moments, and stay updated with
          the world.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" href="/register">
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href="/login">
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
