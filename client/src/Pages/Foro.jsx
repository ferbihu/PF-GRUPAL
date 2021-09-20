import React from "react";
import CarruselPortada from "../Components/Carrusel/CarruselPortada";
import ForoPortada from '../Components/ForoPortada/ForoPortada';
export default function Foro() {
    return (
        <div>
             <div classeName="proyectocontainer">
      <div className="tittleforo">Foro</div>
      <div className="foroPortada-line"></div>
     
            <ForoPortada></ForoPortada>
            <CarruselPortada></CarruselPortada>
            </div>
        </div>
    )
}