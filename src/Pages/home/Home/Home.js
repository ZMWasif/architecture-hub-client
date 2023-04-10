import React from "react";
import Banner from "../Banner/Banner";
import Demos from "../Demos/Demos";
import Templates from "../Templates/Templates";

const Home = () => {
  return (
    <div className="mt-5">
      <Templates></Templates>
      <br />
      <Demos></Demos>
      <br />
      <Banner></Banner>
    </div>
  );
};

export default Home;
