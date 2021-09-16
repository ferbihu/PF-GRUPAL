import React from "react";
import {Link} from 'react-router-dom';
//import {Map} from "../Components/Mapa/Map";
import './LugaresSeguros.css';
import Maps2 from '../Components/Mapa/maps2'

export default function LugaresSeguros() {
    return (
        <div className='pagelugarseguro'>
            <div className="back">
            <div className='titleLS'>
            <h1>LUGARES SEGUROS</h1>
            </div>
            </div>
            <Maps2/>
            <div className="back">
            <br/>
            <Link to='/registratelugarseguro'><button className="btnainput">Registrá un lugar seguro</button></Link>
            <br/>
            <br/>
            </div>
            <div className="parrafo">
                <h2>Qué es un lugar seguro?</h2>
                <br/>
                <p>Son lugares públicos que estarán capacitados para manejar situaciones que se presenten como el acoso, o la violencia de género. Las usuarias podrán activar su ubicación en vivo para poder acudir al “lugar seguro” más cercano que aparezca en el mapa.</p>
                <br/>
                <h2>Cómo es el proceso de aprobación de un lugar seguro?</h2>
                <br/>
                <p>Los lugares públicos que quieran registrarse como un “lugar seguro” tendrán una capacitación INAP - Ley Micaela obligatoria, y recibirán vía mail un protocolo para poder responder ante las distintas situaciones que se presenten.</p>
            </div>
        </div>
    )
}