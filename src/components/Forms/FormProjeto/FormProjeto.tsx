import React from "react";
import "./FormProjeto.css";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { SelectChangeEvent } from "@mui/material";

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
            <Typography variant="h5">Projeto</Typography>
          </Grid>
          <Grid container item>
            <Grid item xs={6}>
              <TextField
                required
                id="filled-required"
                label="Nome"
                defaultValue=""
                variant="filled"
              />
            </Grid>

            <Grid container item spacing={1}>
              <Grid item xs={3}>
                <TextField
                  required
                  id="filled-required"
                  label="Logo"
                  defaultValue=""
                  variant="filled"
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  required
                  id="filled-required"
                  label="Link do Projeto"
                  defaultValue=""
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TextField
          id="filled-textarea"
          label="Descrição"
          multiline
          minRows={4}
          maxRows={4}
          variant="filled"
        />
      </form>
    </Grid>
  );
}
