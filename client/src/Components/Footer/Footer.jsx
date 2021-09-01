import React from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/">Conocenos</Link>
                </li>
                <li>
                    <Link to="/">Foro</Link>
                </li>
                <li>
                    <Link to="/">Lugares Seguros</Link>
                </li>
                <li>
                    <Link to="/">Iniciar Sesión</Link>
                </li>
                <li>
                    <Link to="/">Registrate</Link>
                </li>
            </ul>

        </footer>
    )
}