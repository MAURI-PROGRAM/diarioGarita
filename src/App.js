import React from "react";
import ListarCarros from "./components/ListarCarros";
import { Container } from "reactstrap";
import Titulo from "./components/Titulo";

function App() {
  const nombre = "Diario Garita";
  return (
    <Container>
      <Titulo />
      <ListarCarros />
    </Container>
  );
}

export default App;
