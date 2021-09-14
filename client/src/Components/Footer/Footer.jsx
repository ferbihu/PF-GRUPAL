import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return (
        <footer>

            <div className="logo">
                <h3 className="footer-logo">Safety</h3>
                <h5 className="safety-footer">Safety, 2021</h5>
            </div>

            <ul className="footer-ul">
                <li className="footer-li">
                    <Link to="/elproyecto">Sobre el proyecto</Link>
                </li>
                <li className="footer-li">
                    <Link to="/registratelugarseguro">Registrá un lugar seguro</Link>
                </li>
                <li className="footer-li">
                    <Link to="/conocenos">¿Quiénes somos?</Link>
                </li>

            </ul>

        </footer>
    )
}