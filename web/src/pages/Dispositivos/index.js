import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import "./style.scss";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import BaseButton from "../../components/BaseButton";
import logo from "../../assets/icons/logo.svg";

import firebase from "firebase/app";
import "firebase/database";

const emptyFormDevice = { name: "", code: "" };

const Rotas = () => {
  const history = useHistory();
  const [devices, setDevices] = useState([]);
  const [formDevice, setFormDevice] = useState(emptyFormDevice);
  const [updateCode, setUpdateCode] = useState(false);

  function handleInputChange(event) {
    const { value, name } = event.target;
    setFormDevice((prev) => ({ ...prev, [name]: value }));
  }

  async function fetchDevices() {
    await firebase
      .database()
      .ref("devices")
      .on("value", (data) => {
        const dataDB = data.val();
        if (dataDB) {
          const arrrayDevices = Object.keys(dataDB).map((dev) => {
            return dataDB[dev];
          });
          setDevices([...arrrayDevices]);
        }
      });
  }

  async function submitForm(event) {
    event.preventDefault();
    try {
      if (!formDevice.name) throw new Error("Dados inválidos!");
      formDevice.code = randomCode;
      await firebase.database().ref("devices").push(formDevice);
      setFormDevice(emptyFormDevice);
      setUpdateCode(true);
    } catch (error) {
      alert(error.message);
    }
  }

  const randomCode = React.useMemo(() => {
    if (updateCode) setUpdateCode(false);
    return nanoid(4);
  }, [updateCode]);

  React.useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <PageWrapper footerImage>
      <div className="rotas-page page-content">
        <Header>
          <img src={logo} className="logo" alt="logo" />
          <BaseButton onClick={() => history.push("/cadastro")}>Cadastrar usuário</BaseButton>
          <BaseButton variant="logoff" onClick={() => history.push("/login")}>
            Sair
          </BaseButton>
        </Header>

        <main>
          <div className="aside-form-wrapper">
            <form onSubmit={submitForm}>
              <label>Nome do dispositivo (apelido)</label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                autoComplete="off"
                value={formDevice.name}
                onChange={handleInputChange}
              />

              <label>ID do dispositivo (não pode ser editado)</label>
              <input name="code" id="code" value={randomCode} readOnly />
              <p>
                ID únido usado na identificação do dispositivo <br />
              </p>

              <div className="btn-submit">
                <BaseButton type={"submit"}>Cadastrar</BaseButton>
              </div>
            </form>
          </div>

          <div className="aside-table-wrapper">
            <h2 className="title">Dispositivos cadastrados</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>ID</th>
                </tr>
              </thead>

              <tbody>
                {devices.map((device) => (
                  <tr key={device.code}>
                    <td>{device.name}</td>
                    <td>{device.code}</td>
                  </tr>
                ))}
                {!devices.length && (
                  <tr>
                    <td colSpan="2">Nenhum dispositivo encontrado</td>
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
