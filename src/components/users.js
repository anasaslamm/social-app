import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Toolbar, AppBar } from "@mui/material";

function Users() {
  const [state, setState] = useState({});
  const [userId, setUser] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  }, [userId]);
  return (
    <React.Fragment>
      <Toolbar>
        <AppBar>
          <Typography> App </Typography>
        </AppBar>
      </Toolbar>
      <Typography variant="h4">User {userId}</Typography>
      {state && (
        <Box>
          <Typography variant="h6">Hi! I'm {state.name}</Typography>
          <Typography variant="p">username: {state.username}</Typography>
        </Box>
      )}
      <br />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setUser(userId + 1)}
        endIcon={<SendIcon />}
      >
        Next Post
      </Button>
    </React.Fragment>
  );
}

export default Users;
