import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/featured";

function App() {
  return(
    
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
    </div>
  );
}

export default App;
