import * as React from 'react';
import { Link } from 'react-router-dom';
import mapa from "../../imgs/wmn (1).png";
import "./Mapa.css";

<<<<<<< HEAD
export default function Mapa() {
  
=======
const Mapa = () => {
>>>>>>> main
  return (
    <div className="container">
      <h1>Lugares Seguros</h1>
      <Link to="/lugaresseguros">
        <img src={mapa} alt="Not found" className="img" />
      </Link>
      <p>Encontrá los puntos de la ciudad a los que podes acudir si te encontras en una situación que no te sentis cómoda.</p>
    </div>
  )
}

export default Mapa;