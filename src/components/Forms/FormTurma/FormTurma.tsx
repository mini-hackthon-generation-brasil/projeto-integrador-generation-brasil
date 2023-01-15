import React from "react";
import './FormTurma.css'
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
    Checkbox,
  Grid,
  Typography,
} from "@material-ui/core";
import { SelectChangeEvent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  })
);

export default function Formulario() {
  const classes = useStyles();
  const [numberGroup, setNumberGroup] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setNumberGroup(event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <form className={classes.root} noValidate autoComplete="off">
      <Grid container item>
          <Grid item>
            <Typography variant="h5">Turma</Typography>
          </Grid>
          <Grid container item>
            <Grid item>
              <TextField
                id="filled-textarea"
                label="Descrição"
                multiline
                minRows={4}
                maxRows={4}
                variant="filled"
              />
            </Grid>
            <Grid item>
              <Typography>Está Ativa:</Typography>
              <Checkbox
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
              />
            </Grid>
          </Grid>
        </Grid>

        <button type="submit" className="enviar" /*onClick={handleClose()}*/>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Enviar</span>
          </button>
      </form>
    </Grid>
  );
}
