import React from "react";
import { Link, useParams } from "react-router-dom";
import useDemoDetail from "../useDemoDetail/useDemoDetail";

const DemoDetail = () => {
  const { demoId } = useParams();
  const [demo] = useDemoDetail(demoId);

  return (
    <div>
      <h2>Welcome to the details of: {demo.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${demoId}`}>
          <button className="btn btn-primary">Proceed Further</button>
        </Link>
      </div>
    </div>
  );
};

export default DemoDetail;
