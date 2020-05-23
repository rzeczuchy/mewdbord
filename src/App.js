import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { MewdGrid, Title } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const mewdList = new Array(20).fill(null);

function App() {
  return (
    <div className="App">
      <header>
        <Navbar className="main-nav" variant="dark">
          <Navbar.Brand className="nav-brand" href="#home">Mewdbord</Navbar.Brand>
        </Navbar>
      </header>
      <Title mewdCount={mewdList.length} />
      <MewdGrid list={mewdList} />
    </div>
  );
}

export default App;
