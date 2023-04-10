import React from "react";
import { Button } from "react-bootstrap";
import fb from "../../../images/fb.png";
import insta from "../../../images/instagram.png";
import youtube from "../../../images/youtube.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mt-5 text-black">
      <div
        style={{ width: "80%" }}
        className="d-flex align-items-center justify-content-between mx-auto py-4 flex-wrap"
      >
        <div className="d-flex">
          <small className="ml-2">
            &copy; Architecture Hub, @ {year} All rights reserved.
          </small>
        </div>
        <div className="d-flex">
          <Button variant="light" className="vlog-btn w-5" type="submit">
            <a href="https://www.facebook.com/hallofromgermany">
              <img style={{ width: "30px" }} src={fb} alt="" />
            </a>
          </Button>
          <Button variant="light" className="vlog-btn w-5 " type="submit">
            <a href="https://www.instagram.com/novera_explora">
              <img style={{ width: "30px" }} src={insta} alt="" />
            </a>
          </Button>
          <Button variant="light" className="vlog-btn w-5 " type="submit">
            <a href="https://www.youtube.com/c/HallofromGermany">
              <img style={{ width: "30px" }} src={youtube} alt="" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
