import {
  Avatar,
  Box,
  ButtonGroup,
  Button,
  Fab,
  Stack,
  TextField,
  createTheme,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function Add() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <React.Fragment>
      <Box sx={{ position: "sticky", bottom: "200" }}>
        <Tooltip title="Add" onClick={(e) => setOpen(true)}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <StyledModal open={open} onClose={(e) => setOpen(false)}>
          <Box
            sx={{
              width: "400px",
              height: "200px",

              borderRadius: "10px",
              padding: "20px",
            }}
            bgcolor={"background.default"}
            color={"text.primary"}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <Avatar
                sx={{ width: 30, height: 30, allignItems: "center" }}
                onClick={(e) => setOpen(true)}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Typography variant="h6" component="h2">
                Anas Aslam
              </Typography>
            </Box>
            <TextField
              id="standard-basic"
              label="Share Your Thoughts"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <Stack
              gap={1}
              mt={1}
              mb={2}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="Basic button group"
            >
              <Button sx={{ width: "2000px" }}>Post</Button>
              <Button>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </Box>
    </React.Fragment>
  );
}

export default Add;
