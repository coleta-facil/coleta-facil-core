import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";

import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";

import logo from "../../assets/icons/logo.svg";
import voltar from "../../assets/icons/back.svg";
import BaseButton from "../../components/BaseButton";

import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
  const history = useHistory();

  const [form, setForm] = useState({ email: "", password: "" });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email)) alert("Email inválido!");
    else {
      const auth = await firebase.auth().signInWithEmailAndPassword(email, pass);
      console.log(auth);
      history.push("/dispositivos");
    }
  }

  return (
    <PageWrapper footerImage>
      <div className="login-page page-content">
        <Header justifyContent="flex-start">
          <Link className="link-go-back" to="/">
            <img src={voltar} className="icon-go-back" alt="back" />
          </Link>
        </Header>

        <div className="body">
          <div className="login-body">
            <img src={logo} className="login-icon" alt="logo" />
            <div>
              <h1>Acesse o painel gerencial da sua cidade.</h1>
            </div>
          </div>

          <div className="login-panel">
            <h2 className="title">Acesse sua conta</h2>
            <form onSubmit={submitForm} className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Login"
                value={form.email}
                onChange={handleInputChange}
              />

              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Senha"
                minLength="4"
                value={form.password}
                onChange={handleInputChange}
              />

              <BaseButton type="submit" variant="secondary">
                Entrar
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
