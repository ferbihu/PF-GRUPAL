import React from "react";
import "./IniciaSesion.css"
import GoogleLogin from "react-google-login"



export default function IniciaSesion() {


    const responseGoogle = (response) => {
        console.log(response);
    }

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

            <GoogleLogin
                clientId="58941748087-vv5lmt8hnkri961a7pdrdp9pjsj500vl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <h1 className="txtLog">Inicia sesión</h1>
            <form class="login-form">
                <br></br>
                <label className="p">Email</label>
                <input className="login-username" placeholder="nombre@example.com" />
                <label className="p2">Contraseña</label>
                <input className="login-password" placeholder="Más de 6 caracteres" />
                <button className="login-submit">Ingresá</button>
            </form>
        </div>

    )
}