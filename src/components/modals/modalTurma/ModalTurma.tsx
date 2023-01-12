import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Grid } from "@material-ui/core";
import { Box, Link } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import "./ModalTurma.css";
import { ButtonInicio } from "../../buttonInicio/ButtonInicio";
import FormTurma from "../../Forms/FormTurma/FormTurma";

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

function ModalTurma() {
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
      <FormTurma />
    </div>
  );

  return (
    <>
      <div>
        {/**
         * @Desc - Ilustração dos botões de criar e listar os projetos
         */}
        <Grid container className="grid">
          <Grid item xs={10} sm={7} md={6} lg={5} xl={4} className="grid">
            <ButtonInicio txt="Postar as turmas" callback={handleOpen} className="btn-zoom" />
          </Grid>
          <Grid item xs={10} sm={7} md={6} lg={5} xl={4} className="grid">
            <Link href="/listar-turmas" >
            <ButtonInicio txt="Visualizar as turmas" className="btn-zoom"/>
            </Link>
          </Grid>
        </Grid>
        
        {/**
         * @Desc - Modal que apresenta o formulário de criar projeto
         */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
}
export default ModalTurma;
