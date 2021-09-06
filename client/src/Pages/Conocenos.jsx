import React from "react";
import "./Conocenos.css"
import avatar from "../imgs/avatar.png"
import linkedin from "../imgs/linkedin.png"
import github from "../imgs/github.png"


export default function Conocenos() {
    return (
        <div className="container-conocenos">
            <div className="titulo">Conocenos</div>
            <div className="conocenos-line"></div>

            <div className="parrafo-conocenos">
                <span className="span-conocenos">Safety</span> es una plataforma de geolocalización desarrollada con el fin de implicar al conjunto de
                la sociedad en la <span className="violeta">lucha contra la violencia de género</span> y promover información sobre cómo actuar
                ante un caso de acoso o violencia contra las mujeres.

            </div>
            <div className="parrafo-conocenos">
                Los lugares públicos, como bares, restaurantes y estaciones de servicio podrán adherirse a la causa registrándose
                como un <span className="violeta">lugar seguro</span>.
                Estos puntos tendrán un protocolo para manejar las distintas situaciones que podrían presentarse.
            </div>
            <div className="parrafo-conocenos">
                La aplicación trabaja con la <span className="violeta">ubicación en vivo </span> de las usuarias para poder acudir a los lugares
                seguros cercanos a su ubicación.
            </div>

            <div className="titulo-desarrollada">Desarrollada por</div>
            <div className="conocenos-line2"></div>

            <div className="integrantes">

                <div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Anyel Lopez</h3>
                        <div className="iconos">
                            <a href="https://github.com/any-18" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/anyel-lopez-fullstack-dev/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div>
                <div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Agustina Martinez</h3>
                        <div className="iconos">
                            <a href="https://github.com/AgustinaMartinez4" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/agustina-martinez-it/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Carolina Altamiranda</h3>
                        <div className="iconos">
                            <a href="https://github.com/Qarola" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/carolina-altamiranda-n-dev/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Fernanda Bihurriet</h3>
                        <div className="iconos">
                            <a href="https://github.com/ferbihu" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/fernanda-nahir-bihurriet-a92a13192/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Florencia Ferrari</h3>
                        <div className="iconos">
                            <a href="https://github.com/FlorFerrari" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/florencia-ferrari-9614a2182/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Mora Bessone</h3>
                        <div className="iconos">
                            <a href="https://github.com/morabessone" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/mora-bessone-705a651bb/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div><div className="perfil">
                    <img src={avatar} alt="avatar" className="foto-conocenos" />
                    <div className="nombre">
                        <h3>Verónica Cardozo</h3>
                        <div className="iconos">
                            <a href="https://github.com/V33RO" target="_blank"><img src={github} alt="" className="icono" /></a>
                            <a href="https://www.linkedin.com/in/verocardozojujuy/" target="_blank"><img src={linkedin} alt="" className="icono" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}