import React from "react";

import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

const Main = () => {
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

export default Main;
