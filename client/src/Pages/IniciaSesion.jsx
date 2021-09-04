import React from "react";
import "./IniciaSesion.css"
import GoogleLogin from "react-google-login"

import { useDispatch } from "react-redux";
import { renderUserName } from "../actions/actions";



export default function IniciaSesion() {
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        const userName = response.getBasicProfile().Qe;
        const userID = response.getId();

        console.log(userID);
        console.log(userName);

        dispatch(renderUserName(userName))

    }

    return (

        <div className="contenedor-form">

            <h1 className="txtLog">Inicia sesión</h1>
            <form class="login-form">
                <br></br>
            <GoogleLogin
                clientId="58941748087-vv5lmt8hnkri961a7pdrdp9pjsj500vl.apps.googleusercontent.com"
                buttonText="Ingresá con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="btnGoogle"
            ></GoogleLogin>
                <label className="p">Email</label>
                <input className="login-username" placeholder="nombre@example.com" />
                <label className="p2">Contraseña</label>
                <input className="login-password" placeholder="Más de 6 caracteres" />
                <button className="login-submit">Ingresá</button>
            </form>
        </div>

    )
}