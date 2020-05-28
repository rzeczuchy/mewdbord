import React from "react";
import Navbar from "react-bootstrap/Navbar";

const TopNav = (props) => {
  return (
    <Navbar fixed="top" variant="dark" bg="dark">
      <Navbar.Brand className="nav-brand" href="#">
        Mewdbord
      </Navbar.Brand>
    </Navbar>
  );
};

export default TopNav;
