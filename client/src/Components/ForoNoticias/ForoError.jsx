import React from "react";
import "./ForoError.css";

export default function ForoError() {
    return (
        
        <div className='proyectocontainer'>
            <div className='tittleError'>Lo sentimos su busqueda no produjo resultados</div>
          <div>  <button className="btnbuscar" type="submit">
        Buscar
      </button>
        <input
        className="inputbusqueda"
        autoComplete="off"
        type="text"
        //  value={input.description}
        name="description"
        placeholder="Noticia"
      />
      </div>
    
        </div>
    )
}