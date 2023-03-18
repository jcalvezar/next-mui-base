import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MenuPhone() {
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={openMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClickMenu}
        variant="text"
        sx={{ color: "white" }}
        ml={4}
      >
        Phone
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElMenu}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleCloseMenu}>Dashboard</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Pólizas</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Siniestros</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Prospectos</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Productos</MenuItem>
      </Menu>
    </>
  );
}
