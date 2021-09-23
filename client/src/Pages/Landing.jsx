
import React from 'react';
import { useSelector } from 'react-redux';
import Foro from '../Components/Foro/Foro';
import Header from '../Components/Header/Header';
import Mapa from '../Components/Mapa/Mapa';
import WhatsApp from '../Components/WhatsApp/WhatsApp';
import MujeresSalud from '../Components/Mujeres_en_Salud/MujeresSaludLanding';
import "./Landing.css";


export default function Landing() {

    const rolUser = useSelector((state) => state.role)
    if (rolUser === "admin") {
        localStorage.setItem("isAdmin", true)
    }

    return (
        <div>
            <Header></Header>
            <div >
                <Mapa></Mapa>
                <Foro></Foro>
                <MujeresSalud></MujeresSalud>
                <WhatsApp></WhatsApp>
            </div>
        </div>
    )
}

