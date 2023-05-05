import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";

function App() {
  return(
    
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
      <Discounted></Discounted>
      <Explore></Explore>
    </div>
  );
}

export default App;
