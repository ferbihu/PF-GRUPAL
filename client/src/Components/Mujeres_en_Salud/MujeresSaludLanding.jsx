import React from "react";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import mujer from "../../imgs/mujer.png"

export default function MujeresSalud() {
    return (
        <>
            <div className="container-lugares-landing">
                <Fade bottom>

                    <div className="texto-lugares-landing">
                        <div className="lugaresseguros">

                            MUJERES EN SALUD
                        </div>
                        <div className="lugaresseguros-line"></div>

                        <div className="texto-mapa">
                            Conocé a profesionales de la salud de todo el país
                        </div>
                    </div>
                    <div className="imagen-lugares-landing">
                        <Link to="/lugaresseguros">
                            <img src={mujer} alt="Not found" className="imgMapa" />
                        </Link>
                    </div>





                </Fade>
            </div>

        </>

    )

}