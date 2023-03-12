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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyTree from "../../components/admin/MyTree";
import Datos from "../../components/admin/Datos";

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

const nodos = [
  { id: 1, id_padre: 0, nombre: "Admin" },
  { id: 2, id_padre: 1, nombre: "Zurich" },
  { id: 3, id_padre: 2, nombre: "MKT" },
  { id: 4, id_padre: 2, nombre: "Finanzas" },
  { id: 5, id_padre: 1, nombre: "BBVA" },
  { id: 6, id_padre: 5, nombre: "Phones" },
  { id: 7, id_padre: 5, nombre: "Autos" },
  { id: 8, id_padre: 5, nombre: "Vida" },
];

const theme = createTheme();

export default function Album() {
  const [datosArbol, setDatosArbol] = useState({ actual: false, nodos });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PeopleIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Zurich Megasor
          </Typography>
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
                <MyTree datosArbol={datosArbol} setDatosArbol={setDatosArbol} />
              </Paper>
              <Paper elevation={2} sx={{ flex: 4 }}>
                <Datos datosArbol={datosArbol} setDatosArbol={setDatosArbol} />
              </Paper>
            </Stack>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
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
