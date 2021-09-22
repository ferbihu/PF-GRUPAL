import React from "react";
import { Link } from "react-router-dom";
import "./ForoPortada.css";

export default function Foro() {
  return (
    <div classeName="proyectocontainer">
      <div className="tittleforo">Foro</div>
      <div className="foroPortada-line"></div>
      <div>
      <button className='btnbuscar'>Buscar</button>
        <input
          className="inputbusqueda"
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Noticia"
        />
      </div>
      <Link to="./ForoNoticias">
        <button>Noticias</button>
      </Link>
    </div>
  );
}
