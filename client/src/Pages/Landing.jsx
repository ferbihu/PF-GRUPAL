// Acá renderizamos los componentes:
// Header - Mapa - Foro - Boton WhatsApp 144
import React from 'react';
import Foro from '../Components/Foro/Foro';
import Header from '../Components/Header/Header';
import Mapa from '../Components/Mapa/Mapa';
import WhatsApp from '../Components/WhatsApp/WhatsApp';


export default function Landing() {
    return (
        <div>
            <Header></Header>
            <Mapa></Mapa>
            <Foro></Foro>
            <WhatsApp></WhatsApp>
        </div>
    )
}

