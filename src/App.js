import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const greeting = "Hola"
  return (
    <div className="App">

      <BrowserRouter>

        <NavBar mensaje="Natural Tienda" />
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      
      </BrowserRouter>

      
      <header className="App-header">
        
      </header>
    </div>
  );
}



export default App;
