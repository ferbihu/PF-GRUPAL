// Acá renderizamos los componentes:
// Header - Mapa - Foro - Boton WhatsApp 144
import React from 'react';
import Foro from '../Components/Foro/Foro';
import Header from '../Components/Header/Header';
import Mapa from '../Components/Mapa/Mapa';
import WhatsApp from '../Components/WhatsApp/WhatsApp';
//Styled-components
import styled from "styled-components";
import fondo from "../imgs/fondo-png.png"


export default function Landing() {
    return (
        <>
            <Header></Header>
            <div>
                <Mapa></Mapa>
                <Foro></Foro>
                <WhatsApp></WhatsApp>
            </div>
        </>
    )
}

/* const Fondo = styled.div`
    background-image: url(${fondo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 20%;


`; */
