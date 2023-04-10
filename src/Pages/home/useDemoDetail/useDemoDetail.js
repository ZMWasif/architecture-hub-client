import { useEffect, useState } from "react";

const useDemoDetail = (demoId) => {
  const [demo, setDemo] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/demos/${demoId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDemo(data));
  }, [demoId]);
  return [demo];
};

export default useDemoDetail;
