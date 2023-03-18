import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import MenuItem from "@mui/material/MenuItem";
import { Grid, Stack, TextField } from "@mui/material";

export default function useMotivoDialog() {
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [accept, setAccept] = useState(null);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const abrirDialog = (acceptCallback) => {
    console.log("SETEANDO CALLBACK");
    setAccept(() => acceptCallback);
    setOpen(true);
  };

  const Dialogo = () => {
    const [datosDialog, setDatosDialog] = useState({ nombre: "", tipo: "" });

    const handleChange = (campo, e) => {
      setDatosDialog({ ...datosDialog, [campo]: e });
    };

    const handleAccept = () => {
      accept(datosDialog.nombre, datosDialog.tipo);
      setOpen(false);
    };

    return (
      <Dialog
        onClose={handleCloseModal}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Nombre del Nodo</DialogTitle>
        <DialogContent>
          <Stack spacing={2} pt={1}>
            <TextField
              id="outlined-helperText"
              label="Nombre del Nodo"
              defaultValue=""
              helperText="Debe darle un Nombre al Nodo"
              placeholder="Nombre"
              margin="none"
              variant="outlined"
              value={datosDialog.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              fullWidth
            />

            <TextField
              id="outlined-select"
              select
              label="Tipo de Nodo"
              defaultValue="carpeta"
              helperText="Seleccione el Tipo de Nodo"
              value={datosDialog.tipo}
              onChange={(e) => handleChange("tipo", e.target.value)}
            >
              {["carpeta", "entidad"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleAccept}>
            Aceptar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
            autoFocus
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return [abrirDialog, Dialogo];
}
