import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return (
        <footer>

            <div className="logo">
                <h3 className="footer-logo">S.</h3>
                <h5 className="safety-footer">Safety, 2021</h5>
            </div>

            <ul className="footer-ul">
                <li className="footer-li">
                    <Link to="/">Home</Link>
                </li>
                <li className="footer-li">
                    <Link to="/conocenos">Conocenos</Link>
                </li>
                <li className="footer-li">
                    <Link to="/foro">Foro</Link>
                </li>
                <li className="footer-li">
                    <Link to="/lugaresseguros">Lugares Seguros</Link>
                </li>
                <li className="footer-li">
                    <Link to="/iniciasesion">Iniciar Sesión</Link>
                </li>
                <li className="footer-li">
                    <Link to="/registrate">Registrate</Link>
                </li>
            </ul>

        </footer>
    )
}