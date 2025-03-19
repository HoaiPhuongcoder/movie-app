import React from "react";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1>
            Find <span className="text-gradient">Movie</span> Your'll Enjoy the
            Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>
    </main>
  );
};

export default App;
