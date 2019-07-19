import React, { Component } from "react";
import ListarCarros from "./components/ListarCarros";
import FormIngreso from "./components/FormIngreso";
import ListarVisitas from "./components/ListarVisitas";

import { Container } from "reactstrap";
import Header from "./components/Header";
import db from "./FirestoreConfig";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = { visitantes: [] };
  componentDidMount() {
    db.collection("visitas").onSnapshot(
      snapshot => {
        let visitantes = [];
        snapshot.forEach(doc =>
          visitantes.push({ data: doc.data(), id: doc.id })
        );
        this.setState({
          visitantes
        });
      },
      err => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }

  render() {
    const vistxSalir = this.state.visitantes.filter(
      visitante => visitante.data.salida === undefined
    );

    const listVist = this.state.visitantes.filter(
      visitante => visitante.data.salida !== undefined
    );
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route
              exact
              path="/salida/visita"
              render={() => <ListarCarros visitantes={vistxSalir} />}
            />
            <Route
              exact
              path="/ingreso/visita"
              render={() => <FormIngreso />}
            />
            <Route
              exact
              default
              path="/listar/visita"
              render={() => <ListarVisitas visitantes={listVist} />}
            />

            <Redirect
              to="/listar/visita"
              render={() => <ListarVisitas visitantes={listVist} />}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
