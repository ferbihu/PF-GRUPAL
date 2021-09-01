// Acá renderizamos los componentes:
// Header - Mapa - Foro - Boton WhatsApp 144
import React from 'react';
import Foro from '../Components/Foro/Foro';
import WhatsApp from '../Components/WhatsApp/WhatsApp';


export default function Landing(){
    return (
        <div>
           <Foro></Foro>
           <WhatsApp></WhatsApp>
        </div>
    )}
