import { useNavigate } from "react-router-dom";
import "./Demo.css";

const Demo = ({ demo }) => {
  const { _id, name, img } = demo;
  const navigate = useNavigate();

  const navigateToDemoDetail = (_id) => {
    navigate(`/demos/${_id}`);
  };

  return (
    <div className="demo">
      <img className="demo" src={img} alt="" />
      <button onClick={() => navigateToDemoDetail(_id)} className="demo-btn">
        {name}
      </button>
    </div>
  );
};

export default Demo;
