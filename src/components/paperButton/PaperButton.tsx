import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./PaperButton.css"
import ModalPostagem from '../modalPostagem/ModalPostagem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   height: 200,
    //   width: 200,
    // },
    control: {
      padding: theme.spacing(6),
    },
  }),
);

export default function PaperButton() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

  return (
    <Grid container xs={12}spacing={2}>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignContent='center' spacing={spacing}>
          {/* <Grid item xs={2} spacing={3} className="btn-zoom"> */}
          <Paper elevation={3} className="btn-zoom" onClick={handleOpen}> Poste seu projeto aqui </Paper>
          {/* </Grid> */}
          {/* <Grid item xs={2} spacing={3} className="btn-zoom"> */}
            <Paper elevation={3} className="btn-zoom2"> Vizualizar os projetos </Paper>
          {/* </Grid> */}
        </Grid>
        
      </Grid>
    </Grid>
  );
}
