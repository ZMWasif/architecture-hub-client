import React, { useEffect, useState } from "react";
import "./Demos.css";
import Demo from "../Demo/Demo";
import { motion } from "framer-motion";

const Demos = () => {
  const [demos, setDemos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/demos")
      .then((res) => res.json())
      .then((data) => setDemos(data));
  }, []);
  return (
    <div className="demos-title">
      <motion.h1 animate={{ x: 20 }}> Stunning Demos </motion.h1>

      <div className="demos-container">
        {demos.map((demo) => (
          <Demo key={demo._id} demo={demo}></Demo>
        ))}
      </div>
    </div>
  );
};

export default Demos;
