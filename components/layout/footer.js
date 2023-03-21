import React from "react";
import { Paper } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { drawerWidth } from "./drawer";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  top: "auto",
  bottom: 0,
  alignItems: "center",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Footer(props) {
  const theme = useTheme();
  const { open } = props;

  return (
    <AppBar position="fixed" component="footer" open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Zurich Mega Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
