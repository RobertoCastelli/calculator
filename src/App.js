import React from "react";
import Panel from "./components/Panel";

import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Panel />
      </div>
      <footer>copyright &copy; 2020 Roberto Castelli</footer>
    </div>
  );
}

export default App;
