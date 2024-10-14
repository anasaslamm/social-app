import styled from "@emotion/styled";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import React, { useState } from "react";
import { Person } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#424242" : "white",
  color: "text.primary",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ marginBottom: "20px" }}>
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Anas Aslam
          </Typography>
          <Person sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30, allignItems: "center" }}
              onClick={(e) => setOpen(true)}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Icons>
          <UserIcon onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30, allignItems: "center" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&s"
            />
          </UserIcon>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
