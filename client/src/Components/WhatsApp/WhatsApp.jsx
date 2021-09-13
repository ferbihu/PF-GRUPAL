import React from "react";
//import { Link } from "react-router-dom";
import './WhatsApp.css';



export default function Foro() {

    return (
        <div className='fondoWhatsapp'>
            <div className="contenedor">
                <div className='titulo144'>
                    <h3>Comunicate con el 144</h3>
                    {/* eslint-disable-next-line */}
                    <div className="comunicate-line"></div>
                    {/* eslint-disable-next-line */}
                    <a className='pregunta' href="javascript:window.open('https://www.argentina.gob.ar/generos/linea-144','','width=600,height=400,left=50,top=50,toolbar=yes');void 0">¿Qué es el 144?</a>
                </div>
                 {/* eslint-disable-next-line */}
                <a className='btnayuda' href="javascript:window.open('https://api.whatsapp.com/send?phone=5491127716463','','width=600,height=400,left=50,top=50,toolbar=yes');void 0">
                    BOTÓN DE AYUDA
                </a>




            </div>

        </div>
    )
}