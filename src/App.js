import React, { useState } from "react";
import { MewdGrid, TitleArea, TopNav, FooterBar } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const getSources = () => {
  const sources = [];
  sources.push("https://source.unsplash.com/whDrFMucHkc/800x800");
  sources.push("https://source.unsplash.com/-hI5dX2ObAs/800x800");
  sources.push("https://source.unsplash.com/rTZW4f02zY8/800x800");
  sources.push("https://source.unsplash.com/WKT3TE5AQu0/800x800");
  sources.push("https://source.unsplash.com/5e9CmF-Ge9Y/800x800");
  sources.push("https://source.unsplash.com/OLlj17tUZnU/800x800");
  sources.push("https://source.unsplash.com/kDsNr-vu7ms/800x800");
  sources.push("https://source.unsplash.com/U2uKrI4lci8/800x800");
  sources.push("https://source.unsplash.com/6-jTZysYY_U/800x800");
  sources.push("https://source.unsplash.com/fDSqEWLRNFE/800x800");
  sources.push("https://source.unsplash.com/CzigtQ8gPi4/800x800");
  sources.push("https://source.unsplash.com/_SFJhRPzJHs/800x800");
  sources.push("https://source.unsplash.com/HWIOLU7_O6w/800x800");
  sources.push("https://source.unsplash.com/pd4lo70LdbI/800x800");
  sources.push("https://source.unsplash.com/Q1p7bh3SHj8/800x800");

  return sources;
};

function App() {
  const [sources, setSources] = useState(getSources());

  function addMewd(source) {
    setSources((prevSources) => {
      return [source, ...prevSources];
    });
  }

  function deleteMewd(id) {
    setSources((prevSources) => {
      return prevSources.filter((mewd, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <section className="main-content">
        <TitleArea
          boardTitle={"Space"}
          mewdCount={sources.length}
          onAdd={addMewd}
        />
        <MewdGrid onDelete={deleteMewd} sources={sources} />
      </section>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
