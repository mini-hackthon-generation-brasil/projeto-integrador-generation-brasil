import React from "react";
import "./App.css";
import Formulario from "./components/formulario/Formulario";
import ModalPostagem from "./components/modalProjetos/ModalProjetos";
import { Home } from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PageProjeto } from "./pages/Projeto/PageProjeto";
import { PageGrupo } from "./pages/Grupo/PageGrupo";
import { PageTurma } from "./pages/Turma/PageTurma";
import { ListaProjeto } from "./pages/ListaProjeto/ListaProjeto";

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<PageProjeto/>} />
          <Route path="/grupos" element={<PageGrupo/>} />
          <Route path="/turmas" element={<PageTurma/>} />
          <Route path="/listar-projetos" element={<ListaProjeto/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
