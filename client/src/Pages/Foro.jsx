import React from "react";
import ForoPortada from '../Components/ForoPortada/ForoPortada';
import Caru from '../Components/Carrusel/carrusel'
import { carruseldata } from "../Components/Carrusel/carruseldata";
export default function Foro() {
    return (
        <div>
            <ForoPortada></ForoPortada>
            <div>
                 <Caru slides={carruseldata}></Caru>  
            </div>
         
        </div>
    )
}