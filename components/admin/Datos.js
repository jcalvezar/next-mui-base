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

  const nodoActual = datosArbol.nodos.find(
    (nodo) => nodo.id == datosArbol.actual
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
          >
            <Typography variant="h6">Datos {datosArbol.actual}</Typography>
            <Button
              variant="contained"
              onClick={() => {
                const nodos = datosArbol.nodos;
                const ids = nodos.map((nodo) => nodo.id);
                const maxId = Math.max(...ids) + 1;

                if (nodoActual) {
                  nodos.push({
                    id: maxId,
                    id_padre: nodoActual.id,
                    nombre: "Nuevo",
                  });
                  setDatosArbol({ ...datosArbol, nodos });
                }

                console.log(maxId);
              }}
            >
              Agregar un Hijo
            </Button>
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
    </Box>
  );
}
