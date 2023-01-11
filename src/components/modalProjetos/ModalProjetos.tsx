import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import "./ModalPostagem.css";
import Formulario from "../formulario/Formulario";
import PaperButton from "../paperButton/PaperButton";
import { ButtonInicio } from "../buttonInicio/ButtonInicio";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "50%",
      height: "50%",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      padding: theme.spacing(2, 4, 3),
      borderRadius: "20px",
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "saturate(600%) blur(10px);", 
      
      // backgroundColor: "#fff",
      //  opacity: 0.9,
      
    },
  })
);

function ModalPostagem() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose} />
      </Box>
      <Formulario />
    </div>
  );

  return (
    <div>
      <Grid container className="grid">
        <Grid item xs={10} sm={7} md={6} lg={5} xl={4} className="grid">
          <ButtonInicio txt="Poste seu projeto aqui" callback={handleOpen} />
        </Grid>
        <Grid item xs={10} sm={7} md={6} lg={5} xl={4} className="grid">
          <ButtonInicio txt="Visualizar os projetos" callback={handleOpen} />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPostagem;