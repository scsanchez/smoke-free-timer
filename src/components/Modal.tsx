import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import DataReasons from "./dataReasons";

interface MotivosModalProps {
  open: boolean;
  onClose: () => void;
}

const MotivosModal: React.FC<MotivosModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <DataReasons />

        <Button onClick={onClose}>Cerrar</Button>
      </Box>
    </Modal>
  );
};

export default MotivosModal;
