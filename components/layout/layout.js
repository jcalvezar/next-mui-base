import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { MyDrawer, DrawerHeader, drawerWidth } from "./drawer";
import Header from "./header";
import Footer from "./footer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    minHeight: "100vh",
    backgroundColor: "#eee",
    alignItems: "center",
    //padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const myMenu = [
  {
    section: "Phone",
    items: [
      { icon: <InboxIcon />, text: "Dashboard", link: "/" },
      { icon: <InboxIcon />, text: "Pólizas", link: "/" },
      { icon: <InboxIcon />, text: "Siniestros", link: "/" },
      { icon: <InboxIcon />, text: "Prospectos", link: "/" },
      { icon: <InboxIcon />, text: "Productos", link: "/" },
    ],
  },
  {
    section: "Autos",
    items: [
      { icon: <MailIcon />, text: "Dashboard", link: "/" },
      { icon: <MailIcon />, text: "Pólizas", link: "/" },
      { icon: <MailIcon />, text: "Siniestros", link: "/" },
    ],
  },
  {
    section: "Admin",
    items: [
      { icon: <InboxIcon />, text: "Mega Admin", link: "/admin/mega" },
      { icon: <InboxIcon />, text: "Reportes", link: "/" },
    ],
  },
];

export default function Layout(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        open={open}
        setOpen={setOpen}
        myUser={{ user, setUser }}
        myMenu={myMenu}
      />
      <MyDrawer open={open} setOpen={setOpen} myMenu={myMenu} />

      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>

      <Footer open={open} />
    </Box>
  );
}
