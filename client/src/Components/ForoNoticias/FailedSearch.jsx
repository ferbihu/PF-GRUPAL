import React from "react";
import "./FailedSearch.css";

export default function FailedSearch() {
  return (
    <div classeName="proyectocontainer">
      <div className="tittleforo">Foro</div>
      <div className="foroerror-line"></div>
      <div className='error'>Lo sentimos su busqueda no produjo resultados</div>
      <div>
      <button className='btnsearch'>Buscar</button>
        <input
          className="inputsearch"
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Noticia"
        />
      </div>
    </div>
  );
}
