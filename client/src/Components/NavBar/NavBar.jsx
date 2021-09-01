import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/" className="link">
                <h1>S.</h1>
            </Link>
            <Link to = "/conocenos" className="link">
                Conocenos
            </Link>
            <Link to = "/foro" className="link">
                Foro
            </Link>
            <Link to = "/lugaresseguros" className="link">
                Lugares seguros
            </Link>
            <Link to = "/iniciasesion" className="link">
                Iniciar sesión
            </Link>
            <Link to = "/registrate" className="link">
                Registrate
            </Link>
        </div>
    )
}

export default Nav;