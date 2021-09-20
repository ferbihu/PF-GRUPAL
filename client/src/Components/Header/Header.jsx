import React from "react";
import mujeres from "../../imgs/1280px-Dibujo_mujeres_juntas.svg.png"
import "./Header.css";
import Fade from 'react-reveal/Fade';
// import Panel from "../../Pages/Panel-Admin/Panel";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";


const Header = () => {

    // const rol = useSelector((state) => state.role)

    return (
        <div className="conteinerImg">
            <Fade left duration={2000}>
                <div className="titulo-header">Ola Violeta</div>
                <img src={mujeres} alt="Not found" className="imgMujeres" />
                <div className="subtitulo">Un espacio virtual pensado por y para mujeres.</div>
            </Fade>
        </div>
    )
}

export default Header;