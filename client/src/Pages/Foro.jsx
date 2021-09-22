import React from "react";
import Carrusel from "../Components/Carrusel/Carrusel";
import ForoPortada from '../Components/ForoPortada/ForoPortada';
export default function Foro() {
    return (
        <div>
             <div classeName="proyectocontainer">
      <div className="tittleforo">Foro</div>
      <div className="foroPortada-line"></div>
     
            <ForoPortada></ForoPortada>
           <Carrusel></Carrusel>
            </div>
        </div>
    )
}