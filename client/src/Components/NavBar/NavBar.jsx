import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">
                <h1>S.</h1>
            </Link>
            <Link to = "/conocenos">
                Conocenos
            </Link>
            <Link to = "/foro">
                Foro
            </Link>
            <Link to = "/lugaresseguros">
                Lugares seguros
            </Link>
            <Link to = "/iniciasesion">
                Iniciar sesión
            </Link>
            <Link to = "/registrate">
                Registrate
            </Link>
        </div>
    )
}

export default Nav;