import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '70ch',
      },
    },
  }),
);

export default function Formulario() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
        <TextField
          required
          id="filled-required"
          label="Nome do projeto"
          defaultValue=""
          variant="filled"
        />
        </div>
        <div>
        <TextField
          required
          id="filled-required"
          label="Logo do projeto"
          defaultValue=""
          variant="filled"
        />
        </div>
        <div>
        <TextField
          required
          id="filled-required"
          label="Link do projeto"
          defaultValue=""
          variant="filled"
        />
        </div>
        <div>
        <TextField
          id="filled-number"
          label="Numero do grupo"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <div/>
        <TextField
          id="filled-textarea"
          label="Pit ou descrição do projeto"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        </div>
      </div>
    </form>
  );
}
