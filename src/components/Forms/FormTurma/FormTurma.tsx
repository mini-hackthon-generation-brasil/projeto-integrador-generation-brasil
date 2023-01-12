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
      </form>
    </Grid>
  );
}
