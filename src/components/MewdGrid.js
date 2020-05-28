import React, { useEffect } from "react";
import Mewd from "./Mewd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MewdGrid = (props) => {
  useEffect(() => {
    const callback = (event) => {
      // handle scroll here
    };

    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  });

  return (
    <div>
      <Container fluid>
        <Row className="no-gutters">
          {props.mewdList.map((value, i) => {
            return (
              <Col sm={6} md={4} lg={3} xl={2} key={i}>
                <Mewd key={i} imgSrc={props.mewdList[i]} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MewdGrid;
