import React from "react";
import {Link} from 'react-router-dom';
import './Foro.css';

export default function Foro(){
   return (
    <div className='fondoForo'>
    <div>
        <div >
           <h2 className='tituloForo'>Foro</h2> 
        </div>
        <div className='parrafoForo'>
            <h4>
                Charlamos sobre salud, educación sexual, eventos y más!
            </h4>
            <h4>
                Podés ser parte de una de las comunidades de mujeres más activas.
            </h4>
        </div>
        <div>
            <h3>
                ¡Nos encantaría conocerte!
            </h3>
        </div>
        <div>
            <Link to = '/foro'>
            <button className='btnForo'>
                INGRESÁ AL FORO
            </button>
            </Link>
        </div>
    </div>
        
   )
   
}