import React from "react";
import { useState } from "react";
import "./App.css";
import Router from "./router";
import Navbar from "./pages/Navbar";
import Rightbar from "./pages/Rightbar";
import Feed from "./pages/Feed";
import Sidebar from "./pages/Sidebar";

import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <React.Fragment>
      <Router />;
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
    </React.Fragment>
  );
}

export default App;
