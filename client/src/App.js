import React from "react";
import { Route, Switch } from "react-router-dom";
import Mapa from "./Components/Mapa/Mapa.jsx";

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Mapa}/>
    </Switch>
  );
}

export default App;