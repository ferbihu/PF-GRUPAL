import React from "react";
import { Link } from 'react-router-dom';
import { Map } from "../Components/Mapa/Map";
import './LugaresSeguros.css';

import icono from "../imgs/iconmapp.png"

export default function LugaresSeguros() {
    return (
        <div className='pagelugarseguro'>
            <div className="back">
                <div className="titulo-lugaresseguros">
                    Lugares Seguros
                </div>
                <div className="lugares-line2"></div>
                <div className="subtitulo">
                    Todos los lugares seguros registrados en la página aparecerán sobre el mapa el ícono <img src={icono} alt="casa" className="imagen-casa" />
                </div>
                <div className="subtitulo2">Clickealo para saber más sobre el lugar!</div>
            </div>
            <Map />

            <Link to='/registratelugarseguro'><button className="btnainput">Registrá un lugar seguro</button></Link>

        </div>
    )
}