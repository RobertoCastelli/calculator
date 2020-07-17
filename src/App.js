import React from "react";
import Panel from "./components/Panel";

import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Panel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
