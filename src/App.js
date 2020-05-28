import React from "react";
import { MewdGrid, TitleArea, TopNav } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const mewdList = new Array(20).fill(
  "https://user-images.githubusercontent.com/57368722/82800188-8c494700-9e7b-11ea-9a07-7cbabd1f3335.jpg"
);

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <section className="main-content">
        <TitleArea mewdCount={mewdList.length} />
        <MewdGrid mewdList={mewdList} />
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
