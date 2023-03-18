import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import StoreIcon from "@mui/icons-material/Store";

export const TypeIcon = (props) => {
  if (props.droppable) {
    return <FolderIcon />;
  }

  switch (props.nodeType) {
    case "entidad":
      return <StoreIcon />;
    case "csv":
      return <ListAltIcon />;
    case "text":
      return <DescriptionIcon />;
    default:
      return null;
  }
};
