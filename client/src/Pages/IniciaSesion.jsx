import React, { useState } from "react";
import "./IniciaSesion.css";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { renderUserName, login } from "../actions/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const validate = (input) => {
  let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%&]).{8,}$/;
  let errors = {};
  if (!input.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "email is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!pattern.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
};

export default function IniciaSesion() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const history = useHistory();
 
  const responseGoogle = (response) => {
    const userName = response.getBasicProfile().Qe;
    const userID = response.getId();

    console.log(userID);
    console.log(userName);

    dispatch(renderUserName(userName));
  };

  function handleChange(e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errors.email && !errors.password) {
      dispatch(login(input));

      history.push("/profile");
    } else {
      alert("Algo salió mal...");
    }
  }

  function handleGoogleLogin(e) {
    e.preventDefault();
    history.push("/")
  }

  return (
    <div className="back">
      <h2 className="txtLog">Inicia sesión</h2>
      <br />
      <form class="login-form" onSubmit={(e) => handleSubmit(e)}>
        <br></br>
        <button onClick={(e) => handleGoogleLogin(e)}>
        <GoogleLogin
          clientId="58941748087-vv5lmt8hnkri961a7pdrdp9pjsj500vl.apps.googleusercontent.com"
          buttonText="Ingresá con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="btnGoogle"
        ></GoogleLogin>
        </button>
        <label className="p">Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={input.email}
          className="login-username"
          placeholder="nombre@example.com"
        />
        <p className="danger">{errors.email}</p>
        <label className="p2">Contraseña</label>
        <input
          onChange={handleChange}
          name="password"
          value={input.password}
          className="login-password"
          placeholder="Más de 6 caracteres"
          type="password"
        />
        <p className="danger">{errors.password}</p>
        <button
          className="login-submit"
          disabled={!input.email || !input.password}
          onSubmit={(e) => handleSubmit(e)}
        >
          Ingresá
        </button>
      </form>
    </div>
  );
}
