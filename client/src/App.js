
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import './App.css';
//Import Pages
import Footer from "./Components/Footer/Footer.jsx";
import Foro from "../src/Pages/Foro";
import Conocenos from "./Pages/Conocenos";
import IniciaSesion from "./Pages/IniciaSesion";
import RegistrateLugarSeguro from "./Pages/RegistrateLugarSeguro";
import LugaresSeguros from "./Pages/LugaresSeguros";
import Registrate from "./Pages/Registrate/Registrate";
import Nav from "./Components/NavBar/NavBar";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/conocenos" component={Conocenos}/> 
      <Route exact path="/lugaresseguros" component={LugaresSeguros}/>
      <Route exact path="/registratelugarseguro" component={RegistrateLugarSeguro}/>
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