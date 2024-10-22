import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

function ForgetPassword() {
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
          <Typography variant="h3" color="red">
            Forget Password
          </Typography>
          <TextField label="Email or username" />
          <TextField label="Previous Password" type="password" />
          <Button>Reset Password</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ForgetPassword;
