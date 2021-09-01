import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
//Import Pages
import Footer from "./Components/Footer/Footer.jsx";
import Foro from "./Components/Foro/Foro";
import Conocenos from "./Pages/Conocenos";
import IniciaSesion from "./Pages/IniciaSesion";
import Landing from './Pages/Landing'
import LugaresSeguros from "./Pages/LugaresSeguros";
import Registrate from "./Pages/Registrate";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/conocenos" component={Conocenos}/> 
      <Route exact path="/lugaresseguros" component={LugaresSeguros}/>
      <Route exact path="/iniciasesion" component={IniciaSesion}/>
      <Route exact path="/registrate" component={Registrate}/>
      <Route exact path="/foro" component={Foro}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;