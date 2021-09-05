import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";

const Nav = () => {

    const name = useSelector((state) => state.user)
    console.log(name[0])

    return (
        <div className="container-nav">
            <div className="logo">
                <Link to="/">S.</Link>
            </div>
            <ul className="ul-nav">
                <li>
                    <Link to="/conocenos">Conocenos</Link>
                </li>
                <li>
                    <Link to="/foro">Foro</Link>
                </li>
                <li>
                    <Link to="/lugaresseguros">Lugares Seguros</Link>
                    <div className="nav-line"></div>

                </li>

                <li>

                    <Link to="/iniciasesion">Iniciar Sesión</Link>


                </li>
                <li>

                    <Link to="/registrate">Registrate</Link>

                </li>
                <li>
                    {
                        (name[0]) && <h5>Cerrar Sesión</h5>

                    }
                </li>
                <li>
                    {
                        name && <h5>{name}</h5>
                    }
                </li>

            </ul>

        </div>
    )
}

export default Nav;