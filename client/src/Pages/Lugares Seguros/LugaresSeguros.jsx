import React from "react";
import mapa from "/home/mora/Escritorio/Pf grupal/client/src/imgs/wmn (2).png"

const LugaresSeguros = () => {
    return (
        <div>
            <h1>Lugares Seguros</h1>
            <img src={mapa} alt="Not found"/>
            <p>Encontrá los puntos de la ciudad a los que podes acudir si te encontras en una situación que no te sentis cómoda.</p>
        </div>
    )
}

export default LugaresSeguros;