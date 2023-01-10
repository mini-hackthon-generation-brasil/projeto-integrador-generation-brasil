import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function PaperButton() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

  return (
    <Grid container spacing={2} className='row'>
     
      <Grid item xs={12 } className='row'>
        <Grid container justifyContent="center" alignContent='center'className='row' spacing={spacing}>
            <Grid item className='row'>
              <Paper elevation={24} className={classes.paper}> khjkjkhjkhkj</Paper>
              <Paper elevation={24} className={classes.paper}> asdasdasd</Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
