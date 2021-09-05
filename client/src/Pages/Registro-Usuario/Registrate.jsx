import React, { useState } from "react";
import { addUser } from "../../actions/actions";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";
import "./Registrate.css";

function Register({ addUser, responseGoogle }) {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = (input) => {
    let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%&]).{8,}$/;
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
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

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(input);
  };

  return (
    <div>
      <h2 className="Registration">Registrate</h2>
      <GoogleLogin
        clientId="58941748087-vv5lmt8hnkri961a7pdrdp9pjsj500vl.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <p className="text">o</p>
      <div className="card">
        <form className="LoginForm" onSubmit={(e) => handleSubmit(e)}>
          <div className="FormInput">
            <label>Nombre:</label>
            <input
              className={`${errors.name && "danger"}`}
              type="text"
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            {errors.name && <p className="danger">{errors.name}</p>}
          </div>
          <div className="FormInput">
            <label>Email:</label>
            <input
              className={`${errors.email && "danger"}`}
              type="text"
              name="email"
              placeholder="nombre@ejemplo.com"
              onChange={(e) => handleInputChange(e)}
              value={input.email}
            />
            {errors.email && <p className="danger">{errors.email}</p>}
          </div>
          <div className="FormInput">
            <label>Contraseña:</label>
            <input
              className={`${errors.password && "danger"}`}
              type="password"
              name="password"
              placeholder="más de 6 carácteres"
              onChange={(e) => handleInputChange(e)}
              value={input.password}
            />
            {errors.password && <p className="danger">{errors.password}</p>}
          </div>
          <div className="FormInput">
            <button
              className="btn-submit"
              onClick={() => alert("Registration Successful")}
              type="submit"
            >
              Ingresá
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (info) => dispatch(addUser(info)),
  };
}

export default connect(null, mapDispatchToProps)(Register);
