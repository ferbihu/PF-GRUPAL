
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './Pages/User-Profile-Page/helpers/index';
import './App.css';
//Import Pages
import Footer from "./Components/Footer/Footer.jsx";
import Foro from "../src/Pages/Foro";
import Conocenos from "./Pages/Conocenos";
import IniciaSesion from "./Pages/IniciaSesion";
import RegistrateLugarSeguro from "./Pages/RegistrateLugarSeguro";
import LugaresSeguros from "./Pages/LugaresSeguros";
import MainProfile from "./Pages/User-Profile-Page/MainProfile";
import Registrate from "./Pages/Registro-Usuario/Registrate";
import Nav from "./Components/NavBar/NavBar";
import Panel from "./Pages/Panel-Admin/Panel";
import Sities from "./Pages/Sities/Sitie";


function App() {

  return (
    <BrowserRouter>
     <ChakraProvider theme={theme}>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/conocenos" component={Conocenos}/> 
      <Route exact path="/lugaresseguros" component={Sities}/>
      <Route exact path="/registratelugarseguro" component={RegistrateLugarSeguro}/>
      <Route exact path="/iniciasesion" component={IniciaSesion}/>
      <Route exact path="/profile" component={MainProfile} />
      <Route exact path="/registrate" component={Registrate}/>
      <Route exact path="/foro" component={Foro}/>
      <Route exact path="/panel" component={Panel}/>
      </Switch>
      <Footer/>
    </div>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;