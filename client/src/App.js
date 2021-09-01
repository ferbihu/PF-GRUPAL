import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
//Import Pages
import Footer from "./Components/Footer/Footer.jsx";
import Mapa from "./Components/Mapa/Mapa.jsx";
import Landing from './Pages/Landing'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing}/> 
      <Route exact path="/maps" component={Mapa}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;