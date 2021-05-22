import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Login/style.scss";

import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";

import logo from "../../assets/icons/logo.svg";
import voltar from "../../assets/icons/back.svg";
import BaseButton from "../../components/BaseButton";

const Cadastro = () => {
  const history = useHistory();

  const [form, setForm] = useState({ email: "", password: "" });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    var email = document.getElementById("emailCad").value;
    var pass = document.getElementById("passCad").value;
    var passConf = document.getElementById("confpassCad").value;

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email) || pass !== passConf) alert("Dados inválidos!");
    else {
      history.push("/dispositivos");
    }
  }

  return (
    <PageWrapper footerImage>
      <div className="login-page page-content">
        <Header justifyContent="flex-start">
          <Link className="link-go-back" to="/dispositivos">
            <img src={voltar} className="icon-go-back" alt="back" />
          </Link>
        </Header>

        <div className="body">
          <div className="login-body">
            <img src={logo} className="login-icon" alt="logo" />
            <div>
              <h3>
                Faça o cadastro de novos usuários para acessarem o sistema e facilite a divisão do
                trabalho.
              </h3>
            </div>
          </div>

          <div className="login-panel">
            <h2>Cadastro de usuário</h2>
            <form onSubmit={submitForm} className="form-group">
              <input
                type="text"
                name="emailCad"
                id="emailCad"
                placeholder="Email"
                value={form.emailCad}
                onChange={handleInputChange}
              />

              <input
                type="password"
                name="passwordCad"
                id="passCad"
                placeholder="Senha (mín. 8 caracteres)"
                minLength="8"
                value={form.passwordCad}
                onChange={handleInputChange}
              />

              <input
                type="password"
                name="confpasswordCad"
                id="confpassCad"
                placeholder="Confirme a Senha "
                minLength="8"
                value={form.confpasswordCad}
                onChange={handleInputChange}
              />

              <BaseButton type={"submit"}>Cadastrar</BaseButton>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cadastro;
