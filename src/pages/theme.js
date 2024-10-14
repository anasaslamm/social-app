import { createTheme } from "@mui/material";
import { blue, purple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: red,
    },
    secondary: {
      main: purple[500],
    },
    otherColor: {
      main: "#999",
    },
  },
});
