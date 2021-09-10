import React, { useState } from "react";
import { addUser } from "../../actions/actions";
import { connect } from "react-redux";
import "./Registrate.css";

function Register({ addUser }) {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = (input) => {
    let pattern =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%&]).{8,}$/;
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
      <h2 className="txtRegistrate">Registrate</h2>
      <br/>
      <div className="card">
        <form className="regis-form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <br/>
            <label className="p3">Nombre</label>
            <input
              className={`${errors.name && "danger"}`}
              type="text"
              name="name"
              onChange={handleInputChange}
              value={input.name}
              className="reg-username"
              placeholder="Ingrese su nombre"
            />
            {errors.name && <p className="danger">{errors.name}</p>}
          </div>
          <div>
            <label className="p4">Email</label>
            <input
              className={`${errors.email && "danger"}`}
              type="text"
              name="email"
              placeholder="nombre@ejemplo.com"
              onChange={(e) => handleInputChange(e)}
              value={input.email}
              className="reg-email"
            />
            {errors.email && <p className="danger">{errors.email}</p>}
          </div>
          <div>
            <label className="p5">Contraseña</label>
            <input
              className={`${errors.password && "danger"}`}
              type="password"
              name="password"
              placeholder="Más de 6 carácteres"
              onChange={(e) => handleInputChange(e)}
              value={input.password}
              className="reg-password"
            />
            {errors.password && <p className="danger">{errors.password}</p>}
          </div>
          <div className="FormInput">
            <button
              className="reg-submit"
              onClick={() => alert("Registration Successful")}
              type="submit"
            >
              Registrate
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
