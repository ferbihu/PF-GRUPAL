import React from "react";
import { Link } from 'react-router-dom';
import './Foro.css';

export default function Foro() {
    return (
        <div className='fondoForo'>

            <div >
                <h2 className='tituloForo'>FORO</h2>
                <div className="foro-line"></div>
            </div>

            <div className='parrafoForo1'>

                Charlamos sobre salud, educación sexual, eventos y más!

            </div>
            <div className='parrafoForo2'>

                Podés ser parte de una de las comunidades de mujeres más activas.

            </div>
            <div className='parrafoForo3'>

                ¡Nos encantaría conocerte!

            </div>


            <Link to='/foro' className="link-foro">

                INGRESÁ AL FORO

            </Link>




        </div>

    )

}