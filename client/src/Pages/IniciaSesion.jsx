import React, { useState } from "react";
import "./IniciaSesion.css";

import { useDispatch} from "react-redux";
import {login } from "../actions/actions";

import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";



const validate = (input) => {
  let errors = {};
  if (!input.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "email is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default function IniciaSesion() {

  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const history = useHistory();



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
      swal("Iniciaste sesión correctamente", "Gracias", "success");    
      dispatch(login(input))
      history.push("/")
    } else {
      swal("Oh oh, algo salió mal", "Inténtelo nuevamente", "warning");
    }
  }


  return (
    <div className="back-iniciasesion">
      <h2 className="txtLog">Inicia sesión</h2>
      <br />
      <form class="login-form" onSubmit={(e) => handleSubmit(e)}>
        <br></br>
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
        <h2>
          <Link to="/registrate">No tenes cuenta? Registrate.</Link>
        </h2>
      </form>
    </div>
  );
}
