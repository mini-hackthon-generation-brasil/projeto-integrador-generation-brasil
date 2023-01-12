import React from "react";
import "./FormGrupo.css";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { SelectChangeEvent } from "@mui/material";
import SelectItems from "../selectItems/SelectItems";

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
            <Typography variant="h5">Grupo</Typography>
          </Grid>
        </Grid>

        <Grid container item>
          <Grid item xs={4}>
            <SelectItems />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="filled-textarea"
              label="Mais Informações"
              multiline
              minRows={2}
              maxRows={2}
              variant="filled"
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
