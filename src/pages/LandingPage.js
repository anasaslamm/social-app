import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h1">Hi! I'm Anas</Typography>
        <Button component={Link} to="/auth/login/">
          Login
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default LandingPage;
