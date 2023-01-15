import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import Turma from '../../models/Turma';
import { busca } from '../../services/Service';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListaTurma() {
  const classes = useStyles();

  const [turmas, setTurmas] = useState<Turma[]>([]);
  let navigate = useNavigate();

  async function getPost() {
    await busca("/postagens", setTurmas, { });}

  useEffect(() => {
    getPost();
  }, [turmas.length]);

  return (
    <>
    {turmas.map((turma) => (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          {turma.descricao}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {turma.isAtivo}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ))}
    </>
  );
}