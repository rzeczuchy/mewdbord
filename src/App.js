import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { MewdGrid } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar className="main-nav" variant="dark">
          <Navbar.Brand className="nav-brand" href="#home">Mewdbord</Navbar.Brand>
        </Navbar>
      </header>
      <MewdGrid />
    </div>
  );
}

export default App;
