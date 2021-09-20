import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { GoogleLogout } from "react-google-login"
//import { logOutGoogle } from "../../actions/actions";
import "./NavBar.css";
import logo from "../../imgs/ola22.png"

const Nav = () => {

  const name = useSelector((state) => state.user);
  const logueado = localStorage.getItem("isLogged")
  console.log(name);

  if (logueado === "true") {
    return (
      <div className="container-nav">
        <div className="logo">
          <Link to="/"><img className="icono-ola" src={logo} alt="logo" /></Link>
        </div>
        <ul className="ul-nav">
          <li>
            <Link to="/conocenos">Sobre el proyecto</Link>
            <div className="nav-line"></div>
          </li>

          <li>
            <Link to="/foro">Foro</Link>
            <div className="foro-line"></div>
          </li>
          <li>
            <Link to="/lugaresseguros">Lugares Seguros</Link>
            <div className="nav-line"></div>
          </li>
          <li>
            <Link to="/profile">Mi cuenta</Link>
            <div className="nav-line"></div>

          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container-nav">
        <div className="logo">
          <Link to="/"><img className="icono-ola" src={logo} alt="logo" /></Link>
        </div>
        <ul className="ul-nav">
          <li>
            <Link to="/elproyecto">Sobre el proyecto</Link>
            <div className="nav-line"></div>
          </li>
          <li>
            <Link to="/foro">Foro</Link>
            <div className="foro-line"></div>
          </li>
          <li>
            <Link to="/lugaresseguros">Lugares Seguros</Link>
            <div className="nav-line"></div>
          </li>
          <li className="iniciasesion">
            <Link to="/iniciasesion">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default Nav;

