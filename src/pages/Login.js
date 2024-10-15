import React from "react";

import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Rightbar setMode={setMode} mode={mode} />
            <Feed />
            <Sidebar />
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
