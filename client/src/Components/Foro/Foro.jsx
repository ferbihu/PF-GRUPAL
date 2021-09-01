import React from "react";
import { Link } from 'react-router-dom';
import './Foro.css';

export default function Foro() {
    return (
        <div className='fondoForo'>
            <div>
                <div >
                    <h2 className='tituloForo'>Foro</h2>
                </div>
                <div className='parrafoForo1'>
                    <h4>
                        Charlamos sobre salud, educación sexual, eventos y más!
                    </h4>
                </div>
                <div className='parrafoForo2'>
                    <h4>
                        Podés ser parte de una de las comunidades de mujeres más activas.
                    </h4>
                </div>
                <div className='parrafoForo3'>
                    <h3>
                        ¡Nos encantaría conocerte!
                    </h3>
                </div>
                <div>
                    <Link to='/foro'>
                        <button className='btnForo'>
                            INGRESÁ AL FORO
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )

}