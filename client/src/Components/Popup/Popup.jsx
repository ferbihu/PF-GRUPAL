import React, { useState, useEffect } from "react";
import "./Popup.css"
import { useDispatch } from "react-redux";
import { rejectedStatus } from "../../actions/actions"


function Popup(props) {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        description_status: "",

    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        console.log(input)
    }

    function rejectedStatusHandler() {
        console.log(input.description_status, props.id)
        let id = props.id;
        let payload = input.description_status
        dispatch(rejectedStatus(id, payload))

        window.location.reload();



    }

    return (props.trigger) ? (
        <div className="popup">

            <div className="popup-inner">

                <div className="texto-popup">Por favor, explicá el motivo del rechazo</div>
                <textarea name="description_status" value={input.description_status} cols="30" rows="10" onChange={(e) => handleChange(e)}></textarea>

                <button className="rechazar-buton" onClick={() => rejectedStatusHandler(props.id)}>Enviar y Rechazar</button>

                <button className="close-buton" onClick={() => props.setTrigger(false)}>Volver al panel</button>
            </div>

        </div >
    ) : "";

}

export default Popup
