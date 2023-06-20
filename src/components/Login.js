import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({ password, email });
  };

  return (
    <section className="register page__center">
      <div className="register__container">
        <h3 className="register__title">Войти</h3>
        <form
          className="register__form"
          name="register-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div>
            <label className="form__label">
              <input
                value={email}
                onChange={handleChangeEmail}
                className="register__input"
                type="email"
                placeholder="Email"
                name="email"
                minLength="2"
                maxLength="40"
                required
              />
            </label>
            <label className="form__label">
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                id="password"
                placeholder="Пароль"
                className="register__input"
                name="password"
                minLength="4"
                maxLength="10"
                required
                autoComplete="on"
              />
            </label>
          </div>

          <button className="register__submit-btn" type="submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
