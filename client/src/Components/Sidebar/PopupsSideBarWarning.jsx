import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closePopup } from '../../actions/actions';
import "./PopupsSideBar.css"
import swal from "sweetalert";


function validate(input) {
    let errors = {};
    if (!input.comment) {
        errors.comment = "Por favor deja un comentario"
    }
    return errors;
}


export default function PopupsSideBarWarning({ text }) {

    const dispatch = useDispatch();
    function HandleClose() {
        dispatch(closePopup())

    }
    const [input, setInput] = useState({
        comment: "",

    })
    const [errors, setErrors] = useState({})
    console.log(input)

    function HandleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))

        console.log(input)
    }

    function HandleSubmit() {
        swal("Enviado", "Gracias por colaborar con Safety!", "success");

        console.log(input)
        setInput({
            comment: ""
        })
        dispatch(closePopup())
    }

    return (
        <div className="fondo-popup">
            <div className="popup-container-map">
                <div className="text-popup-map">
                    {/* Por favor, explicanos el motivo de la denuncia.  Si denuncias un lugar, automáticamente
                    aparecerá de color amarillo en el mapa y será revisado por las administradoras de la página. */}
                    {text}
                </div>

                <textarea value={input.comment} name="comment" onChange={(e) => HandleChange(e)} className="popup-map-text" id="" cols="30" rows="10"></textarea>
                {errors.comment && (
                    <p>{errors.comment}</p>
                )}
                <button disabled={!input.comment} className="popup-map-bt" onClick={() => HandleSubmit()} >Enviar</button>
                <button className="popup-map-bt" onClick={() => HandleClose()}>Volver</button>

            </div>
        </div>


    )
}
