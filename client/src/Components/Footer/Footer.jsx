import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <h3>S.</h3>
            </div>
            <div className="year">
                <h5>Safety, 2021</h5>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/conocenos">Conocenos</Link>
                </li>
                <li>
                    <Link to="/foro">Foro</Link>
                </li>
                <li>
                    <Link to="/lugaresseguros">Lugares Seguros</Link>
                </li>
                <li>
                    <Link to="/iniciasesion">Iniciar Sesión</Link>
                </li>
                <li>
                    <Link to="/registrate">Registrate</Link>
                </li>
            </ul>

        </footer>
    )
}