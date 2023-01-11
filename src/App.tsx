import React from 'react';
import './App.css';
import Formulario from './components/formulario/Formulario';
import ModalPostagem from './components/modalPostagem/ModalPostagem';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <ModalPostagem />
    </div>
  );
}

export default App;
