import { useState, useRef, useEffect } from "react";
import banners from "../../Images/banner-images";
import "./Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="banner-container">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {banners.map((banner) => {
            return (
              <motion.div className="item" key={banner}>
                <img src={banner} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
