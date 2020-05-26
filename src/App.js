import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { MewdGrid, Title } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const mewdList = new Array(20).fill("https://user-images.githubusercontent.com/57368722/82800188-8c494700-9e7b-11ea-9a07-7cbabd1f3335.jpg");

function App() {
  return (
    <div className="App">
      <header>
        <Navbar fixed="top" variant="dark" bg="dark">
          <Navbar.Brand className="nav-brand" href="#">Mewdbord</Navbar.Brand>
        </Navbar>
      </header>
      <section className="main-content">
        <Title mewdCount={mewdList.length} />
        <MewdGrid mewdList={mewdList} />
      </section>
    </div>
  );
}

export default App;
