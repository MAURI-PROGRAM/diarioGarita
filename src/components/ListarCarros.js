import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import Timestamp from "react-timestamp";
import Titulo from "../components/Titulo";
import { withRouter } from "react-router-dom";
import db from "../FirestoreConfig";
import Swal from "sweetalert2";

export default withRouter(
  class ListarCarros extends Component {
    state = {
      id: ""
    };
    colocarSalida = e => {
      e.preventDefault();
      db.collection("visitas")
        .doc(e.target.value)
        .update({
          salida: new Date()
        })
        .then(ref => {
          Swal.fire(
            "El carro con placa ha salido",
            "El producto se editó correctamente",
            "success"
          );
          this.props.history.push("/listar/visita");
        });
    };
    render() {
      const { visitantes } = this.props;
      return (
        <div>
          <Titulo
            titulo="Lista de Visitantes"
            subtitulo="visitantes por salir"
          />
          <Table responsive className="text-center">
            <thead>
              <tr>
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
                      <td>{visitante.data.cedula}</td>
                      <td>{visitante.data.placa}</td>
                      <td>
                        {visitante.data.entrada === undefined ? (
                          "--/--/-- --:--:--"
                        ) : (
                          <Timestamp
                            date={visitante.data.entrada.seconds}
                            options={{ twentyFourHour: true }}
                          />
                        )}
                      </td>
                      <td>
                        <Button
                          color="danger"
                          onClick={this.colocarSalida}
                          value={visitante.id}
                          name={"salida"}
                        />
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
);
