import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../css/FooterBar.css";

const FooterBar = (props) => {
  return (
    <Navbar
      className="footerBar justify-content-center"
      variant="dark"
      bg="dark"
    >
      <p className="footer-credits">
        Coded by{" "}
        <a
          href="https://github.com/rzeczuchy"
          target="_blank"
          rel="noopener noreferrer"
        >
          rzeczuchy
        </a>
        .
      </p>
      <p className="footer-credits">
        Photos from{" "}
        <a
          href="https://unsplash.com/@nasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          NASA
        </a>
        .
      </p>
    </Navbar>
  );
};

export default FooterBar;
