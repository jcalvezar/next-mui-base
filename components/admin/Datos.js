import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { display } from "@mui/system";
import useNodeNameDialog from "./NodeNameDialog";
import useNodeNodoDialog from "./NodeNodoDialog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{ bgcolor: "background.paper", width: "100%", height: "200px" }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { datosArbol, setDatosArbol } = props;

  const [abrirDialogoNombre, DialogoNombre] = useNodeNameDialog();
  const [abrirDialogoNodo, DialogoNodo] = useNodeNodoDialog();

  const nodoActual = datosArbol.nodos.find(
    (nodo) => nodo.id == datosArbol.actual
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleAdd = () => {
    abrirDialogoNombre(handleAdd2);
  };

  const handleAdd2 = (nombre) => {
    const nodos = datosArbol.nodos;
    const ids = nodos.map((nodo) => nodo.id);
    const maxId = Math.max(...ids) + 1;

    if (nodoActual) {
      nodos.push({
        id: maxId,
        id_padre: nodoActual.id,
        nombre,
      });
      setDatosArbol({ ...datosArbol, nodos });
    }
  };

  const handleDelete = () => {
    const nodos = datosArbol.nodos;
    const indice = nodos.findIndex((nodo) => nodo.id === nodoActual.id);
    nodos.splice(indice, 1);
    setDatosArbol({ ...datosArbol, nodos });
  };

  const handleMove = () => {
    abrirDialogoNodo(handleMove2);
  };

  const handleMove2 = (id) => {
    const nodos = datosArbol.nodos;
    const nodo = nodos.find((nodo) => nodo.id === nodoActual.id);
    nodo.id_padre = id;
    console.log("NODO", nodo);
    setDatosArbol({ ...datosArbol, nodos });
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Datos" {...a11yProps(0)} />
          <Tab label="Secciones" {...a11yProps(1)} />
          <Tab label="Roles" {...a11yProps(2)} />
          <Tab label="Usuarios" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Stack
            sx={{ p: "10px" }}
            direction="row"
            justifyContent="space-between"
            alignContent="center"
            spacing={1}
          >
            <Typography variant="h6" sx={{ flex: 1 }}>
              ID Nodo {datosArbol.actual}
            </Typography>
            <Button variant="contained" onClick={handleAdd}>
              Agregar un Hijo
            </Button>
            {/* <Button variant="contained" onClick={handleMove}>
              Mover
            </Button> */}
            <Button variant="contained" onClick={handleDelete}>
              Borrar
            </Button>
          </Stack>
          <Stack sx={{ p: "10px" }} spacing={1}>
            <Typography variant="b1" sx={{ flex: 1 }}>
              Nombre: {nodoActual?.text}
            </Typography>
            <Typography variant="b1" sx={{ flex: 1 }}>
              Tipo: Genérico
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Secciones
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Roles
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Usuarios
        </TabPanel>
      </SwipeableViews>
      <DialogoNombre />
      <DialogoNodo />
    </Box>
  );
}
