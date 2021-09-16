
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './Pages/User-Profile-Page/helpers/index';
import './App.css';
//Import Pages
import Footer from "./Components/Footer/Footer.jsx";
import Foro from "../src/Pages/Foro";
import ForoError from "../src/Pages/ForoError";
import Conocenos from "../src/Pages/Conocenos/Conocenos.jsx"
import IniciaSesion from "./Pages/IniciaSesion";
import RegistrateLugarSeguro from "./Pages/RegistrateLugarSeguro";
// import LugaresSeguros from "./Pages/LugaresSeguros";
import MainProfile from "./Pages/User-Profile-Page/MainProfile";
import Registrate from "./Pages/Registro-Usuario/Registrate";
import Nav from "./Components/NavBar/NavBar";
import Panel from "./Pages/Panel-Admin/Panel";
import Sities from "./Pages/Sities/Sitie";
import ProyectoInfo from "./Pages/Proyecto-info/Proyecto-info";
import ForoNoticias from './Pages/ForoNoticias/ForoNoticias';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {

  return (
    <BrowserRouter>
     <ChakraProvider theme={theme}>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/elproyecto" component={ProyectoInfo}/> 
      <Route exact path="/lugaresseguros" component={Sities}/>
      <Route exact path="/registratelugarseguro" component={RegistrateLugarSeguro}/>
      <Route exact path="/iniciasesion" component={IniciaSesion}/>
      <Route exact path="/profile" component={MainProfile} />
      <Route exact path="/registrate" component={Registrate}/>
      <Route exact path="/foro" component={Foro}/>
      <Route exact path="/foroerror" component={ForoError}/>
      <Route exact path="/foroNoticias" component={ForoNoticias}/>
      <PrivateRoute exact path="/panel" component={Panel}/>
      <Route exact path="/conocenos" component={Conocenos}/>

      </Switch>
      <Footer/>
    </div>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;