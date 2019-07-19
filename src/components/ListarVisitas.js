import React, { Component } from "react";
import Titulo from "../components/Titulo";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";
import Timestamp from "react-timestamp";

export default withRouter(
  class ListarVisitas extends Component {
    render() {
      const { visitantes } = this.props;
      return (
        <div>
          <Titulo
            titulo="Listado de Visitantes"
            subtitulo="Historico de visitas"
          />
          <Table responsive className="text-center">
            <thead>
              <tr>
                <th>Placa</th>
                <th>Entrada</th>
                <th>Salida</th>
                <th>Tiempo de Visita</th>
              </tr>
            </thead>
            <tbody>
              {visitantes && visitantes !== undefined
                ? visitantes.map((visitante, key) => (
                    <tr key={key}>
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
                        {visitante.data.salida === undefined ? (
                          "--/--/-- --:--:--"
                        ) : (
                          <Timestamp
                            date={visitante.data.salida.seconds}
                            options={{ twentyFourHour: true }}
                          />
                        )}
                      </td>
                      <td>
                        {visitante.data.salida === undefined &&
                        visitante.data.entrada === undefined ? (
                          "--/--/-- --:--:--"
                        ) : (
                          <Timestamp
                            relative
                            date={visitante.data.entrada.seconds}
                            relativeTo={visitante.data.salida.seconds}
                            autoUpdate
                          />
                        )}
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
