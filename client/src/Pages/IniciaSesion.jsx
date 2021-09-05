import React, { useState } from "react";
import "./IniciaSesion.css"
import GoogleLogin from "react-google-login"

import { useDispatch } from "react-redux";
import { renderUserName,login } from "../actions/actions";





export default function IniciaSesion() {
    const dispatch = useDispatch();
    const [input,setInput] = useState({email:"",password:""})

    const responseGoogle = (response) => {
        const userName = response.getBasicProfile().Qe;
        const userID = response.getId();

        console.log(userID);
        console.log(userName);

        dispatch(renderUserName(userName))

    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };


    

   async function handleSubmit(e){
    // console.log("SOY HANDLESUBMIT")  
     e.preventDefault()
        dispatch(login(input))
    };

    return (

        <div className="contenedor-form">

            <h1 className="txtLog">Inicia sesión</h1>
            <form class="login-form" onSubmit={e => handleSubmit(e)}>
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
                <input onChange={handleChange} name ="email" value ={input.email} className="login-username" placeholder="nombre@example.com" />
                <label className="p2">Contraseña</label>
                <input onChange={handleChange} name ="password" value={input.password} className="login-password" placeholder="Más de 6 caracteres" />
                <button  onSubmit={e => handleSubmit(e)} className="login-submit">Ingresá</button>
            </form>
        </div>

    )
}