// Acá renderizamos los componentes:
// Header - Mapa - Foro - Boton WhatsApp 144
import React from 'react';
import Foro from '../Components/Foro/Foro';
import Header from '../Components/Header/Header';
import Mapa from '../Components/Mapa/Mapa';
import WhatsApp from '../Components/WhatsApp/WhatsApp';
import "./Landing.css";


export default function Landing() {
    // const logead = localStorage.getItem("isLogged")
    // if (logead) {

    // }
    // localStorage.setItem("isLogged", false)
    return (
        <div>
            <Header></Header>
            <div >
                <Mapa></Mapa>
                <Foro></Foro>
                <WhatsApp></WhatsApp>
            </div>
        </div>
    )
}

