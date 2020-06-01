import React from "react";
import Mewd from "./Mewd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MewdGrid = (props) => {
  return (
    <div>
      <Container fluid>
        <Row className="no-gutters">
          {props.sources.map((value, i) => {
            return (
              <Col sm={6} md={4} lg={3} xl={2} key={i}>
                <Mewd
                  key={i}
                  id={i}
                  imgSrc={props.sources[i]}
                  onDelete={props.onDelete}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MewdGrid;
