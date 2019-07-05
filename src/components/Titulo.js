import React, { Fragment } from "react";
import { Row, Col, Jumbotron } from "reactstrap";
const Titulo = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <Jumbotron className="text-center">
            <h1 className="display-5">Lista de visitantes</h1>
            <p className="lead">visintates por salir</p>
          </Jumbotron>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Titulo;
