import React, { useState } from 'react';
import "./Panel-Noticias.css"

function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = "Se requiere un título"
    }
    if (!input.image) {
        errors.image = "Se requiere una imagen"
    }
    if (!input.content) {
        errors.content = "Se requiere un contenido"
    }
}

const PanelNoticias = () => {

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        title: "",
        image: "",
        content: "",
    })
    return (
        <div className="back">
            <h1>Noticia</h1>
            <div className="contenedorNot">
                    <form>
                        <div>
                        <input className="notice-title" placeholder="Título"/>
                        <input className="notice-img" placeholder="Imágen"/>
                        <textarea className="notice-content" placeholder="Contenido"/>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default PanelNoticias;