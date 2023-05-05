import React from "react";
import Highlights from "../components/Highlights";
import Featured from "../components/featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Landing from "../components/Landing";

function Home() {
  return (
    <>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
      <Discounted></Discounted>
      <Explore></Explore>
    </>
  );
}

export default Home;
