import React from "react";
import "./Conocenos.css"

import linkedin from "../../imgs/linkedin.png"
import Agus from "../../imgs/Agus.png"
import Any from "../../imgs/Any.png"
import Caro from "../../imgs/Caro.png"
import Fer from "../../imgs/Fer.png"
import Flor from "../../imgs/Flor.png"
import Mor from "../../imgs/Mor.png"
import Vero from "../../imgs/Vero.png" 
import github from "../../imgs/github.png"




export default function Conocenos() {
    return (
        <div className="container-desarrolladoras">


            <div className="titulo-desarrollada">Desarrollada por</div>
            <div className="conocenos-line2"></div>

            <div className="integrantes">

                <div className="perfil">
                    <img src={Any} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Anyel Lopez</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/any-18" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/anyel-lopez-fullstack-dev/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div>
                <div className="perfil">
                    <img src={Agus} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Agustina Martinez</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/AgustinaMartinez4" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/agustina-martinez-it/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={Caro} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Carolina Altamiranda</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/Qarola" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/carolina-altamiranda-n-dev/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={Fer} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Fernanda Bihurriet</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/ferbihu" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/fernanda-nahir-bihurriet-a92a13192/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={Flor} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Florencia Ferrari</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/FlorFerrari" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/florencia-ferrari-9614a2182/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={Mor} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Mora Bessone</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/morabessone" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/mora-bessone-705a651bb/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={Vero} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Verónica Cardozo</h3>
                        <div className="iconos">
                            {/* eslint-disable-next-line */}
                            <a href="https://github.com/V33RO" target="_blank"><img src={github} alt="" className="icono" /></a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.linkedin.com/in/verocardozojujuy/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}