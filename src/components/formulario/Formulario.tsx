import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Checkbox, Divider, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { SelectChangeEvent } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "70ch",
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
    <Grid container>
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
                label="Link"
                defaultValue=""
                variant="filled"
              />
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
        </Grid>
        <Divider />

        <Grid container item>
          <Grid item>
            <Typography variant="h5">Grupo</Typography>
          </Grid>
        </Grid>

        <Grid container item>
          <Grid item xs={4}>
            {/* <TextField
              id="filled-number"
              label="Número"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            /> */}

            {/**
             * @TODO: componentizar o Select
             */}
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // onChange={handleChange}
              label="Número"
              title="tese"
            >
              <MenuItem>Grupo 1</MenuItem>
              <MenuItem>Grupo 2</MenuItem>
              <MenuItem>Grupo 3</MenuItem>
              <MenuItem>Grupo 4</MenuItem>
              <MenuItem>Grupo 5</MenuItem>
              <MenuItem>Grupo 6</MenuItem>
              <MenuItem>Grupo 7</MenuItem>
            </Select>
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
              <Checkbox 
              icon={<CheckCircleOutlineIcon/>}
              checkedIcon={<CheckCircleIcon/>}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
