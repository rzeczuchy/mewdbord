import React, { useState } from "react";
import { MewdGrid, TitleArea, TopNav } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [sources, setSources] = useState(
    new Array(20).fill(
      "https://user-images.githubusercontent.com/57368722/82800188-8c494700-9e7b-11ea-9a07-7cbabd1f3335.jpg"
    )
  );

  function addMewd(source) {
    setSources((prevSources) => {
      return [source, ...prevSources];
    });
  }

  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <section className="main-content">
        <TitleArea mewdCount={sources.length} onAdd={addMewd} />
        <MewdGrid sources={sources} />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
