import React, { Component } from "react";
import Titulo from "../components/Titulo";
import { withRouter } from "react-router-dom";
import db from "../FirestoreConfig";
import Swal from "sweetalert2";

export default withRouter(
  class FormIngreso extends Component {
    state = {
      cedula: "",
      nombre: "",
      placa: ""
    };
    render() {
      const enviarinfo = e => {
        e.preventDefault();
        const { nombre, placa, cedula } = this.state;
        db.collection("visitas")
          .add({
            nombre: nombre,
            cedula: cedula,
            placa: placa,
            entrada: new Date()
          })
          .then(ref => {
            this.setState({
              cedula: "",
              nombre: "",
              placa: ""
            });
            Swal.fire(
              "Ingresado exitosamente",
              "El carro con placa esta de visita",
              "success"
            );
            this.props.history.push("/salida/visita");
          });
      };

      const actualizaState = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      return (
        <div>
          <Titulo
            titulo="Fomulario nuevas visitas"
            subtitulo="visitantes por ingresar"
          />
          <div className="bg-success">
            <div className="container">
              <div className="row">
                <form
                  onSubmit={enviarinfo}
                  className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                >
                  <fieldset>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Cedula</label>
                          <input
                            type="text"
                            className="form-control"
                            name="cedula"
                            placeholder="Cedula del visitante"
                            onChange={actualizaState}
                            value={this.state.cedula}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Nombre</label>
                          <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombres del visitante"
                            onChange={actualizaState}
                            value={this.state.nombre}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Placa</label>
                          <input
                            type="text"
                            className="form-control"
                            name="placa"
                            placeholder="Placa del vehiculo del visitante"
                            onChange={actualizaState}
                            value={this.state.placa}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Guardar
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
