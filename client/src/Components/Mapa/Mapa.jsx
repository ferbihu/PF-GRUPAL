import * as React from 'react';
import { Link } from 'react-router-dom';
import mapa from "/home/mora/Escritorio/Pf grupal/client/src/imgs/wmn (1).png"

const Mapa = () => {
    return (
        <div>
            <h1>Lugares Seguros</h1>
              <Link to="/lugaresseguros">
                <img src={mapa} alt="Not found"/>
              </Link>
            <p>Encontrá los puntos de la ciudad a los que podes acudir si te encontras en una situación que no te sentis cómoda.</p>
        </div>
    )
}

export default Mapa; 