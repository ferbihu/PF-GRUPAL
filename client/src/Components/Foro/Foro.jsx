import React from "react";
import { Link } from 'react-router-dom';
import './Foro.css';
import Fade from 'react-reveal/Fade';
import noticia from "../../imgs/noticia.png"

export default function Foro() {
    return (
        <>
            <div className="container-lugares-landing">
                <Fade bottom>
                    <div className="imagen-lugares-landing">
                        <Link to="/foro">
                            <img src={noticia} alt="Not found" className="imgMapa" />
                        </Link>
                    </div>

                    <div className="texto-lugares-landing">
                        <div className="lugaresseguros">

                            NOTICIAS Y ENTREVISTAS
                        </div>
                        <div className="lugaresseguros-line"></div>

                        <div className="texto-mapa">
                            Charlamos sobre educación, tecnología, salud y más!
                        </div>
                    </div>





                </Fade>
            </div>

        </>

    )

}