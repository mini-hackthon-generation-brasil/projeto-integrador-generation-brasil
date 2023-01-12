import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PageProjeto } from "./pages/Projeto/PageProjeto";
import { PageGrupo } from "./pages/Grupo/PageGrupo";
import { PageTurma } from "./pages/Turma/PageTurma";
import { ListaProjeto } from "./pages/ListaProjeto/ListaProjeto";
import { ListaTurma } from "./pages/ListaTurma/ListaTurma";
import { ListaGrupo } from "./pages/ListaGrupo/ListaGrupo";

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<PageProjeto/>} />
          <Route path="/grupos" element={<PageGrupo/>} />
          <Route path="/turmas" element={<PageTurma/>} />
          <Route path="/listar-projetos" element={<ListaProjeto/>} />
          <Route path="/listar-grupos" element={<ListaGrupo/>} />
          <Route path="/listar-turmas" element={<ListaTurma/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
