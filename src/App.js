import logo from './logo.svg';
import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar mensaje="Natural Tienda" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Natural tienda
        </p>
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com/ingresar"
          target="_blank"
          rel="noopener noreferrer"
        >
          CorderHouse
        </a>
      </header>
    </div>
  );
}



export default App;
