import { useState } from "react";
import validateUserData from "../../validation";
import style from "./Form.module.css"

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validateUserData({ ...userData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (<div className={style.login}>
    <form  onSubmit={handleSubmit}>
      <img
        src="/form_logo.png"
        alt="Form img"
        style={{ borderRadius: "50%", width: "200px", height: "200px" }}
      />
      <hr />
      <label htmlFor="email">Email: </label>
      <input
        className={errors.email ? "error" : ""}
        name="email"
        placeholder="Ingrese su Email."
        onChange={handleChange}
        value={userData.email}
        type="email"
      />
      <hr />
      {errors.email && <h6 className="error-message">{errors.email}</h6>}
      <hr />
      <label htmlFor="password">Password: </label>
      <input
        className={errors.password ? "error" : ""}
        name="password"
        placeholder="Ingrese su password."
        onChange={handleChange}
        value={userData.password}
        type="password"
      />
      <hr />
      {errors.password && <h6 className="error-message">{errors.password}</h6>}
      <hr />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}
