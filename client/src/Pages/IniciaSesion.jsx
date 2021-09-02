import React from "react";
import "./IniciaSesion.css"

export default function IniciaSesion() {
    return (
        // <div>
        //     <h1 className="txtLog">Inicia sesión</h1>
        //     <label>Email</label>
        //     <input placeholder="nombre@ejemplo.com"/>
        //     <label>Contraseña</label>
        //     <input placeholder="Más de 6 caracteres"/>
        //     <button>Ingresá</button>
        // </div>
            <div className="contenedor-form">
                <h1 className="txtLog">Inicia sesión</h1>
                <form class="login-form">
                    <label className="p">Email</label>
                    <input className="login-username" placeholder="nombre@example.com" />
                    <label className="p2">Contraseña</label>
                    <input className="login-password" placeholder="Más de 6 caracteres" />
                    <button className="login-submit">Ingresá</button>
                </form>
            </div>

    )
}