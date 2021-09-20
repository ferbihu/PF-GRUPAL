import React from 'react'
import "./Proyecto-info.css"
import Toggle from '../../Components/Toggle'

import { AnimateSharedLayout } from "framer-motion"

import gps from "../../imgs/gps.png"


export default function ProyectoInfo() {
    return (
        <div className="proyecto-container">
            <div className="titulo">Conocenos</div>
            <div className="conocenos-line"></div>

            <div className="info-container">
                <div className="parrafo-conocenos">
                    <span className="span-conocenos">Ola Violeta</span> es una plataforma de geolocalización desarrollada con el fin de implicar al conjunto de
                    la sociedad en la <span className="violeta">lucha contra la violencia de género</span> y promover información sobre cómo actuar
                    ante un caso de acoso o violencia contra las mujeres.
                </div>
                <img src={gps} alt="gps" className="gps-image" />
                <div className="parrafo-conocenos">
                    Los lugares públicos, como bares, restaurantes y estaciones de servicio podrán adherirse a la causa registrándose
                    como un <span className="violeta">lugar seguro</span>.
                    Estos puntos tendrán un protocolo para manejar las distintas situaciones que podrían presentarse.
                    La aplicación trabaja con la <span className="violeta">ubicación en vivo </span> de las usuarias para poder acudir a los lugares
                    seguros cercanos a su ubicación.
                </div>
            </div>

            <div className="titulo-preguntas">Preguntas Frecuentes</div>
            <div className="preguntas-line"></div>

            {/* PREGUNTAS FRECUENTES */}
            <AnimateSharedLayout>
                <Toggle title="¿Qué es un lugar seguro?">
                    <div className="question">
                        <div className="answer">
                            <p>Los lugares públicos, como bares, restaurantes y estaciones de servicio podrán
                                adherirse a la causa registrándose como un lugar seguro. Estos puntos tendrán un
                                protocolo para manejar las distintas situaciones que podrían presentarse.
                                La aplicación trabaja con la ubicación en vivo de las usuarias para poder acudir a los
                                lugares seguros cercanos a su ubicación.
                            </p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title="¿Cómo hago el registro de un lugar seguro?">
                    <div className="question">
                        <div className="answer">
                            <p>Podés completar el formulario en nuestra web. Ingresá a "Lugares Seguros" y luego elegí la opción "Registrar lugar seguro".
                            </p>
                        </div>

                    </div>
                </Toggle>

                <Toggle title="¿Cómo es el proceso de aprobación de un lugar seguro?">
                    <div className="question">

                        <div className="answer">
                            <p>Luego de registrar tu lugar seguro, te llegará a tu mail una declaracion jurada y un PDF
                                con un protocolo que tu local y toda aquella persona que trabaje allí debera seguir en situaciones de emergencia.
                            </p>
                            <p>Una vez completada la declaración jurada, las administradoras de la página decidirán si el lugar se aprueba o no. En ambos casos, recibirás un mail con la información correspondiente.
                                Si el lugar es aprobado, se verá en el mapa de Ola Violeta.
                            </p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title="¿Puedo denunciar un lugar seguro?">
                    <div className="question">

                        <div className="answer">
                            <p>Ingresando a "Lugares Seguros" podrás ver en el mapa todos los lugares registrados.</p>
                            <p>Para denunciar alguno en particular, hacé click en el lugar que desees y luego elegí la opción "Este no es un lugar seguro? Avisanos."
                            </p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title="¿Qué pasa si mi establecimiento es denunciado?">
                    <div className="question">

                        <div className="answer">
                            <p>Si una persona denuncia tu lugar, aparecerá en el mapa con un color amarillo y un estado de alerta.</p>
                            <p>Las administradoras de la página revisarán la denuncia y decidirán si el lugar se retira definitivamente de la página o no.
                            </p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title="¿Puedo borrar mi lugar seguro del mapa?">
                    <div className="question">

                        <div className="answer">
                            <p>Luego de iniciar sesión, ingresá a "Mi cuenta" para poder ver todos los lugares seguros que hayas registrado.
                                Para borrarlo del mapa, elegí la opción "Eliminar lugar"
                            </p>
                        </div>

                    </div>
                </Toggle>
            </AnimateSharedLayout>

        </div>
    )
}

