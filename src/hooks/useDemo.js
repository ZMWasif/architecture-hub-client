import { useEffect, useState } from "react";

const useDemo = () => {
  const [demos, setDemos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/demos")
      .then((res) => res.json())
      .then((data) => setDemos(data));
  }, []);
  return [demos, setDemos];
};

export default useDemo;
