import React from "react";
import {Link} from 'react-router-dom';
import './ForoPortada.css';

export default function Foro() {
    return (
        <div className='proyectocontainer'>
            <div className='tittleforo'>Foro</div>
            <div className='foroPortada-line'></div>
            <Link to='./ForoNoticias'><button>Noticias</button></Link>
        </div>
    )
}