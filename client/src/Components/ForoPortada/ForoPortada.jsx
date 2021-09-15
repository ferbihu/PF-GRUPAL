import React from "react";
import {Link} from 'react-router-dom';
import './ForoPortada.css';

export default function Foro() {
    return (
        <div>
            <div className='tittleforo'><h1>Foro</h1></div>
            <Link to='./ForoNoticias'><button>Noticias</button></Link>
        </div>
    )
}