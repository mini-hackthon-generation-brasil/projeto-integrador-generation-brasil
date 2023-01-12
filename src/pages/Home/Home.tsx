import React from "react";
import "./Home.css";
import { Stack, styled } from "@mui/material";
import { ButtonInicio } from "../../components/buttonInicio/ButtonInicio";
import { Container, Link } from "@material-ui/core";

const Item = styled(Container)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Item>
        <Link href="/projetos">
        <ButtonInicio
          txt="Projeto Integrador"
          className="btn-zoomProjeto"
        />
        </Link>
      </Item>
      <Item>
      <Link href="/grupos">
        <ButtonInicio
          txt="Grupo Integrador"
          callback={handleOpen}
          className="btn-zoomGrupoI"
        />
        </Link>
      </Item>
      <Item>
      <Link href="/turmas" >
        <ButtonInicio
          txt="Turmas"
          callback={handleOpen}
          className="btn-zoomTurma"
        />
        </Link>
      </Item>
    </Stack>
  );
}

export { Home };
