import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { GoogleLogout } from "react-google-login"
//import { logOutGoogle } from "../../actions/actions";
import "./NavBar.css";

const Nav = () => {

  const name = useSelector((state) => state.user);
  const logueado = useSelector((state) => state.isLogged);
  console.log(name);

  if (logueado === true) {
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
            <Link to="/profile">Mi cuenta</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container-nav">
        <div className="logo">
          <Link to="/">S.</Link>
        </div>
        <ul>
          <li>
            <Link to="/elproyecto">Sobre el proyecto</Link>
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
        </ul>
      </div>
    );
  }
};

export default Nav;

