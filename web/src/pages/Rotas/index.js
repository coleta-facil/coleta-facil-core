import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "../../assets/styles/global.scss";
import "./style.scss";
import "../Welcome/style.scss";
import "../Login/style.scss";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import BaseButton from "../../components/BaseButton";

const Rotas = () => {
  const history = useHistory();

  const [form, setForm] = useState({ deviceName: "", rota: "", code: "" });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    var deviceName = document.getElementById("deviceName").value;
    var codigo = document.getElementById("code").value;

    //const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;

    if (!deviceName) alert("Dados inválidos!");
    else {
      alert(codigo);
    }
  }

  const randomCode = (len) => {
    let code = "";
    do {
      code += Math.random().toString(36).substr(2).toUpperCase();
    } while (code.length < len);
    return code;
  };

  return (
    <PageWrapper footerImage>
      <div className="rotas-page page-content">
        <Header>
          <img src={logo} className="logo" alt="logo" />
          <BaseButton onClick={() => history.push("/cadastro")}>
            Cadastrar usuário
          </BaseButton>
          <BaseButton type="submit" variant="logoff">
            Sair
          </BaseButton>
        </Header>

        <div className="form-register-routes">
          <h2>Cadastro de dispositivo</h2>
          <form onSubmit={submitForm} className="form-group">
            <label>Nome do dispositivo(apelido)</label>
            <input
              type="text"
              name="placa"
              id="placa"
              placeholder="Nome do dispositivo"
              value={form.deviceName}
              onChange={handleInputChange}
            />

            <label>Rota</label>
            <input
              type="text"
              name="rota"
              id="rota"
              placeholder="Nome da rota"
              value={form.rota}
              onChange={handleInputChange}
            />

            <label>ID do dispositivo</label>
            <input
              name="code"
              id="code"
              value={randomCode(4)}
              onChange={handleInputChange}
              readOnly
            />
            <p>ID únido usado na identificação do dispositivo</p>
            <p>(Não pode ser editado)</p>

            <div className="btn-submit">
              <BaseButton type={"submit"}>Cadastrar</BaseButton>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Rotas;
