import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import BaseButton from "../../components/BaseButton";
import logo from "../../assets/icons/logo.svg";

import firebase from "firebase/app";
import "firebase/database";

const diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];
const emptyFormRota = { name: "", dayWeek: "", initialTime: "", finalTime: "", device: "" };

const Rotas = () => {
  const history = useHistory();
  const [formRota, setFormRota] = useState(emptyFormRota);
  const [rotas, setRotas] = useState([]);
  const [devices, setDevices] = useState([]);

  function handleInputChange(event) {
    const { value, name } = event.target;
    setFormRota((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    try {
      if (!formRota.name || !formRota.initialTime || !formRota.finalTime || !formRota.dayWeek) {
        throw new Error("Dados inválidos!");
      }

      setRotas((prev) => [...prev, { ...formRota }]);
      setFormRota(emptyFormRota);
    } catch (error) {
      alert(error.message);
    }
  }

  async function fetchData() {
    // setRotas([]); //firebase

    firebase
      .database()
      .ref("devices")
      .on("value", (data) => {
        const dataDB = data.val();
        if (dataDB) {
          const arrayDevices = Object.keys(dataDB).map((dev) => {
            return dataDB[dev];
          });
          setDevices([...arrayDevices]);
        }
      });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageWrapper footerImage>
      <div className="rotas-page page-content">
        <Header>
          <img src={logo} className="logo" style={{ marginRight: "auto" }} alt="logo" />
          <BaseButton onClick={() => history.push("/dispositivos")}>
            Cadastrar dispositivo
          </BaseButton>
          <BaseButton variant="logoff" onClick={() => history.push("/login")}>
            Sair
          </BaseButton>
        </Header>

        <main>
          <div className="aside-form-wrapper">
            <form onSubmit={submitForm}>
              <h2 className="title">Cadastrar Rotas</h2>

              <label>Nome da rota</label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                autoComplete="off"
                value={formRota.name}
                onChange={handleInputChange}
              />

              <label>Dia da semana</label>
              <select name="dayWeek" value={formRota.dayWeek} onChange={handleInputChange}>
                <option value="" disabled>
                  Selecione...
                </option>
                {diasDaSemana.map((dia) => (
                  <option key={dia} value={dia}>
                    {dia}
                  </option>
                ))}
              </select>

              <label>Dispositivo</label>
              <select name="device" value={formRota.device} onChange={handleInputChange}>
                <option value="" disabled>
                  Selecione...
                </option>
                {devices.map((device) => (
                  <option key={device.code} value={device.name}>
                    {device.name}
                  </option>
                ))}
              </select>

              <div className="inline-group">
                <div>
                  <label>Horario inicial</label>
                  <input
                    type="time"
                    name="initialTime"
                    value={formRota.initialTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Horario final</label>
                  <input
                    type="time"
                    name="finalTime"
                    value={formRota.finalTime}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="btn-submit">
                <BaseButton type={"submit"}>Adicionar</BaseButton>
              </div>
            </form>
          </div>

          <div className="aside-table-wrapper">
            <h2 className="title">Rotas cadastrados</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Dia</th>
                  <th>Período</th>
                  <th>Dispositivo</th>
                </tr>
              </thead>

              <tbody>
                {rotas.map((rota, i) => (
                  <tr key={i + rota.name}>
                    <td>{rota.name}</td>
                    <td>{rota.dayWeek}</td>
                    <td>
                      {rota.initialTime} / {rota.finalTime}
                    </td>
                    <td>{rota.device}</td>
                  </tr>
                ))}
                {!rotas.length && (
                  <tr>
                    <td colSpan="4">Nenhum rota encontrada</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};

export default Rotas;
