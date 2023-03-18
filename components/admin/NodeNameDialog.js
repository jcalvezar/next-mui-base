import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { Grid, Typography, TextField } from "@mui/material";

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
    const [datosDialog, setDatosDialog] = useState({ motivo: "", email: "" });

    const handleChange = (campo, e) => {
      setDatosDialog({ ...datosDialog, [campo]: e });
    };

    const handleAccept = () => {
      accept(datosDialog.motivo);
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
          <DialogContentText id="alert-dialog-description">
            Ingrese el Nombre que tendrá el Nodo
          </DialogContentText>
          <TextField
            placeholder="Nombre"
            size="small"
            margin="none"
            variant="outlined"
            value={datosDialog.motivo}
            onChange={(e) => handleChange("motivo", e.target.value)}
            fullWidth
          />
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
