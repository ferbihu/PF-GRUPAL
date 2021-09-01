import React from "react";
import mujeres from "../../imgs/1280px-Dibujo_mujeres_juntas.svg.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="conteinerImg">
            <h1 className="textS">Safety</h1>
            {/* <p className="textH">Un espacio pensado por y para mujeres.</p> */}
            <img src={mujeres} alt="Not found" className="imgMujeres"/>
        </div>
    )
}

export default Header;