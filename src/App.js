import React from "react";

import { Footer, Header } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default App;
