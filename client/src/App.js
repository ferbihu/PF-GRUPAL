import React from "react";
import Mapa from "./Components/Mapa/Mapa.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing'

import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing}/> 
      <Route exact path="/maps" component={Mapa}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;