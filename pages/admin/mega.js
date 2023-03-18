import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import PeopleIcon from "@mui/icons-material/People";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuPhone from "../../components/admin/MenuPhone";
import MenuAutos from "../../components/admin/MenuAutos";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyTree from "../../components/admin/MyTree";
import MyTree2 from "../../components/admin/MyTree/MyTree2";
import Datos from "../../components/admin/Datos";
import SampleData from "../../components/admin/MyTree/sample_data.json";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  const [datosArbol, setDatosArbol] = useState({
    actual: null,
    nodos: [...SampleData],
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PeopleIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap mr={10}>
            Zurich Mega Admin
          </Typography>
          <MenuPhone />
          <MenuAutos />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              //justifyContent="center"
            >
              <Paper elevation={2} sx={{ flex: 2 }}>
                {/* <MyTree datosArbol={datosArbol} setDatosArbol={setDatosArbol} /> */}
                <MyTree2
                  datosArbol={datosArbol}
                  setDatosArbol={setDatosArbol}
                />
              </Paper>
              <Paper elevation={2} sx={{ flex: 4 }}>
                <Datos datosArbol={datosArbol} setDatosArbol={setDatosArbol} />
              </Paper>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
