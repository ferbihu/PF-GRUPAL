import React from "react";
import mujeres from "../../imgs/1280px-Dibujo_mujeres_juntas.svg.png"
import "./Header.css"
import Panel from "../../Pages/Panel-Admin/Panel";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="conteinerImg">
            <h1 className="textS">Safety</h1>
            <Link to="/panel">Panel Admin</Link>
            <img src={mujeres} alt="Not found" className="imgMujeres" />
        </div>
    )
}

export default Header;