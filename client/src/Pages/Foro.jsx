import React from "react";
import Carrusel from "../Components/Carrusel/Carrusel";
import ForoPortada from '../Components/ForoPortada/ForoPortada';
import CarruselPortada from "../Components/Carrusel/CarruselPortada.jsx";
export default function Foro() {
    return (
        <div>
            <div classeName="proyectocontainer">
                <ForoPortada></ForoPortada>
                <Carrusel></Carrusel>
                <CarruselPortada></CarruselPortada>
            </div>
        </div>
    )
}