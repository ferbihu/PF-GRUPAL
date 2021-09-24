import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from '../../actions/actions';
import "./PopupsSideBar.css"
import swal from "sweetalert";
import axios from "axios";
const { REACT_APP_BACK_BASE_URL } = process.env



function validate(input2) {
    let errors = {};
    if (!input2.comment_text) {
        errors.comment_text = "Por favor deja un comentario"
    }
    return errors;
}


export default function PopupsComment({ text, id, setInput }) {
    const dispatch = useDispatch();

    function HandleClose() {
        dispatch(closePopup())

    }
    const [input2, setInput2] = useState({
        comment_text: "",

    })

    const [errors, setErrors] = useState({})


    const idUser = useSelector((state) => state.userId)



    function HandleChange(e) {
        setInput2({
            ...input2,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input2,
            [e.target.name]: e.target.value
        }))


    }

    async function HandleSubmit() {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
        };
        await axios.post(`${REACT_APP_BACK_BASE_URL}/safe_place/new_comment`, { ...input2, userId: idUser, safePlaceId: id }, config);

        swal("Enviado", "Gracias por colaborar con Ola Violeta!", "success");
        setInput2({
            comment_text: ""
        })
        dispatch(closePopup())
        setInput(false)
    }
    return (
        <div className="fondo-popup">
            <div className="popup-container-map">
                <div className="text-popup-map">
                    {/* Por favor, explicanos el motivo de la denuncia.  Si denuncias un lugar, automáticamente
                    aparecerá de color amarillo en el mapa y será revisado por las administradoras de la página. */}
                    {text}
                </div>

                <textarea value={input2.comment_text} name="comment_text" onChange={(e) => HandleChange(e)} className="popup-map-text" id="" cols="30" rows="10"></textarea>
                {errors.comment_text && (
                    <p>{errors.comment_text}</p>
                )}
                <button disabled={!input2.comment_text} className="popup-map-bt" onClick={() => HandleSubmit()} >Enviar</button>
                <button className="popup-map-bt" onClick={() => HandleClose()}>Volver</button>

            </div>
        </div>


    )
}
