import React from "react";
import {Link} from 'react-router-dom';
import Map from "../Components/Mapa/Map";
import './LugaresSeguros.css';

export default function LugaresSeguros() {
    return (
        <div className='pagelugarseguro'>
            <div className='titleLugarSeguro'>
            <h1>Lugares seguros</h1>
            </div>
            <Map/>
            <Link to='/registratelugarseguro'><button className="btnainput">Registrá un lugar seguro</button></Link>
        </div>
    )
}