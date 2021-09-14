import React from 'react'

export default function ProyectoInfo() {
    return (
        <div>
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
            <div className="preguntas">
                Preguntas frecuentes
            </div>
        </div>
    )
}

