import React, { useState } from "react";
import "./Popup.css"
import { useDispatch, useSelector } from "react-redux";
import { rejectedStatus } from "../../actions/actions"
import axios from "axios";
const{ REACT_APP_BACK_BASE_URL} = process.env


function Popup(props) {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.userData)


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

    async function rejectedStatusHandler() {
        console.log(input.description_status, props.id)
        let id = props.id;
        let payload = input.description_status
        dispatch(rejectedStatus(id, payload))

        await axios.post(`${REACT_APP_BACK_BASE_URL}/email/rejected`, user)


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
