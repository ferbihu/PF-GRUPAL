import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Nav = () => {
    return (
        <div className="conteiner">
            <Link to="/">
                <h1 className="s">S.</h1>
            </Link>
            <Link to = "/conocenos">
                <p className="text">
                Conocenos
                </p>
            </Link>
            <Link to = "/foro">
                <p className="text">
                Foro
                </p>
            </Link>
            <Link to = "/lugaresseguros">
                <p className="text">
                Lugares seguros
                </p>
            </Link>
            <Link to = "/iniciasesion">
                <p className="text">
                Iniciar sesión
                </p>
            </Link>
            <Link to = "/registrate">
                <p className="text">
                Registrate
                </p>
            </Link>
        </div>
    )
}

export default Nav;