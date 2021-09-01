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
                <p className="textNav">
                Conocenos
                </p>
            </Link>
            <Link to = "/foro">
                <p className="textNav">
                Foro
                </p>
            </Link>
            <Link to = "/lugaresseguros">
                <p className="textNav">
                Lugares seguros
                </p>
            </Link>
            <Link to = "/iniciasesion">
                <p className="textNav">
                Iniciar sesión
                </p>
            </Link>
            <Link to = "/registrate">
                <button className="btnReg">
                Registrate
                </button>
            </Link>
        </div>
    )
}

export default Nav;