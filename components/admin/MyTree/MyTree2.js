import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { DndProvider } from "react-dnd";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
} from "@minoru/react-dnd-treeview";
import { CustomNode } from "./CustomNode";
import { CustomDragPreview } from "./CustomDragPreview";
import { theme } from "./theme";
import styles from "./MyTree2.module.css";
import SampleData from "./sample_data.json";

function MyTree2(props) {
  const { datosArbol, setDatosArbol } = props;
  const handleDrop = (newTree) =>
    setDatosArbol({ ...datosArbol, nodos: newTree });
  const handleSelect = (node) =>
    setDatosArbol({ ...datosArbol, actual: node.id });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className={styles.app}>
          <Tree
            tree={datosArbol.nodos}
            rootId={0}
            render={(node, { depth, isOpen, onToggle }) => (
              <CustomNode
                node={node}
                depth={depth}
                isOpen={isOpen}
                isSelected={node.id === datosArbol?.actual}
                onToggle={onToggle}
                onSelect={handleSelect}
              />
            )}
            enableAnimateExpand={true}
            dragPreviewRender={(monitorProps) => (
              <CustomDragPreview monitorProps={monitorProps} />
            )}
            onDrop={handleDrop}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              dropTarget: styles.dropTarget,
            }}
          />
        </div>
      </DndProvider>
    </ThemeProvider>
  );
}

export default MyTree2;
