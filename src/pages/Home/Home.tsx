import React from "react";
import "./Home.css";
import { Stack } from "@mui/material";
import ModalPostagem from "../../components/modals/modalProjetos/ModalProjetos";

function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <ModalPostagem />
    </Stack>
  );
}

export { Home };
