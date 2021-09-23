// import { MapInit } from './Map';
import * as React from "react";
import { Link } from "react-router-dom";
import mapa from "../../imgs/location.png";
import WaveContainer from "./Wave";
import Fade from 'react-reveal/Fade';

import "./Mapa.css";

const Mapa = () => {
  return (
    <>
      <WaveContainer />
      <div className="container-lugares-landing">
        <Fade bottom>
          <div className="texto-lugares-landing">
            <div className="lugaresseguros">

              LUGARES <span>SEGUROS</span>
            </div>
            <div className="lugaresseguros-line"></div>

            <div className="texto-mapa">
              Encontrá los puntos de la ciudad a los que podes acudir si te
              encontras en una situacion incómoda o de violencia.
            </div>
          </div>


          <div className="imagen-lugares-landing">
            <Link to="/lugaresseguros">
              <img src={mapa} alt="Not found" className="imgMapa" />
            </Link>
          </div>

        </Fade>
      </div>

    </>
  );
};

export default Mapa;

