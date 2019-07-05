import React, { Component } from "react";
import db from "../FirestoreConfig";
import { Table, Button } from "reactstrap";

export default class ListarCarros extends Component {
  state = {
    visitantes: []
  };
  componentDidMount() {
    db.collection("visitas")
      .get()
      .then(
        snapShots => {
          this.setState({
            visitantes: snapShots.docs.map(doc => {
              return { id: doc.id, data: doc.data() };
            })
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    const { visitantes } = this.state;
    return (
      <div>
        <Table hover className="text-center">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cedula</th>
              <th>Placa</th>
              <th>Entrada</th>
              <th>Salida</th>
            </tr>
          </thead>
          <tbody>
            {visitantes && visitantes !== undefined
              ? visitantes.map((visitante, key) => (
                  <tr key={key}>
                    <td>{visitante.data.nombre}</td>
                    <td>{visitante.data.cedula}</td>
                    <td>{visitante.data.placa}</td>
                    <td>{visitante.data.entrada}</td>
                    <td>
                      <Button color="danger">Salida</Button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}
