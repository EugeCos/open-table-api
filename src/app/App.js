import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
