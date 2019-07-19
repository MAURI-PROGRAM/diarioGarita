import React, { Fragment } from "react";
import { Row, Col, Jumbotron } from "reactstrap";
const Titulo = ({ titulo, subtitulo }) => {
  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <Jumbotron className="text-center">
            <h1 className="display-5">{titulo}</h1>
            <p className="lead">{subtitulo}</p>
          </Jumbotron>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Titulo;
