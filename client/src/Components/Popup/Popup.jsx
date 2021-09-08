import React from 'react'
import "./Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">

            <div className="popup-inner">

                <div className="texto-popup">Por favor, explicá el motivo del rechazo</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="rechazar-buton">Enviar y Rechazar</button>
                <button className="close-buton" onClick={() => props.setTrigger(false)}>Volver al panel</button>
            </div>

        </div >
    ) : "";

}

export default Popup
