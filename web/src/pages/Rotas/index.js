import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

  const [form, setForm] = useState({ placa: "", rota: "", code: "" });

  function handleInputChange(event) {
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    var placa = document.getElementById("placa").value;
    var rota = document.getElementById("rota").value;
    var codigo = document.getElementById("code").value;

    const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;

    if (!regexPlaca.test(placa)) alert("Dados inválidos!");
    else {
      alert(codigo);
    }
  }

  const randomCode = (len) => {
    let code = "";
    do {
      code += Math.random().toString(36).substr(2);
    } while (code.length < len);
    return code;
  };

  return (
    <PageWrapper footerImage>
      <div className="rotas-page page-content">
        <Header>
          <button className="button" onClick={() => history.push("/cadastro")}>
            Cadastrar Usuário
          </button>
          <button className="button" onClick={() => history.push("/login")}>
            Sair
          </button>
        </Header>

        <div className="rotas-body">
          <img src={logo} className="logo" alt="logo" />
          <ol>
            <li>
              1°{")"} Entre{" "}
              <a
                className="link-routes"
                href="https://www.maps.ie/map-my-route/"
              >
                aqui
              </a>{" "}
              para criar uma rota.
            </li>
            <li>2°{")"} Se localize no mapa! Ache a cidade de Araguaína.</li>
            <li>3°{")"} Escolha "Driving" na opção TRAVEL MODE.</li>
            <li>
              4°{")"} Se preferir outro tipo de mapa, existem outras opções no
              campo VIEW.
            </li>
            <li>
              5°{")"} Depois disso, trace a rota do caminhão. É só clicar no
              mapa os lugares pelos quais o caminhão do lixo passa!
            </li>
            <li>
              6°{")"} Quando a rota estiver completa, você precisa salvar a rota
              no botão "Save Route".
            </li>
            <li>
              7°{")"} Coloque como título o bairro ou região que a rota abrange.{" "}
            </li>
            <li>
              8°{")"} E como descrição, os dias que ele passa por aquele lugar.
            </li>
            <li>
              9°{")"} Faça o download na opção "Google Earth KML" e suba o
              arquivo no campo abaixo!
            </li>
          </ol>
          <br />
          <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
          <input className="button-file" type="file" /> <br /> <br />
          Lembre-se que: <br />
          <ul>
            <li>
              - Se precisar voltar alguma ação, a opção ao lado do mapa "Undo
              Last Leg", faz isso para você.
            </li>
            <li>
              - A opção "Out and Back", faz o trabalho de ir e voltar pela mesma
              rota.
            </li>
            <li>- "Loop Route" faz a rota repetir.</li>
            <li>- E "Remove All", remove todas as suas marcações!</li>
          </ul>
        </div>

        <div className="login-panel">
          <h2>Cadastrar Caminhão</h2>
          <form onSubmit={submitForm} className="form-group">
            <input
              type="text"
              name="placa"
              id="placa"
              placeholder="Placa do Caminhão"
              value={form.placa}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="rota"
              id="rota"
              placeholder="Rota do Dia"
              value={form.rota}
              onChange={handleInputChange}
            />
            <input
              type="hidden"
              name="code"
              id="code"
              value={randomCode(10)}
              onChange={handleInputChange}
              readOnly
            />

            <BaseButton type={"submit"}>Cadastrar</BaseButton>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Rotas;
