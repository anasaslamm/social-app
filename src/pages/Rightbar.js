import {
  Group,
  Home,
  Pages,
  Person,
  Settings,
  Storefront,
  ModeNight,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import Add from "./Add";

function Rightbar({ mode, setMode }) {
  return (
    <React.Fragment>
      <List sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ position: "sticky", top: 100 }}>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          <ListItemButton component="a" href="#marketplace">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
          <Box sx={{ marginLeft: "20px", marginTop: "70px" }}>
            <Add />
          </Box>
        </Box>
      </List>
    </React.Fragment>
  );
}

export default Rightbar;
