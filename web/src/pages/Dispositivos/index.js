import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import separator from "../../assets/icons/separator.svg";
import "../../assets/styles/global.scss";
import "./style.scss";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import BaseButton from "../../components/BaseButton";

const Dispositivos = () => {
  const history = useHistory();

  return (
    <PageWrapper footerImage>
      <div className="disp-page page-content">
        <Header>
          <BaseButton onClick={() => history.push("/cadastro")}>
            Cadastrar Usuário
          </BaseButton>
          <BaseButton onClick={() => history.push("/login")}>Sair</BaseButton>
        </Header>

        <div className="body">
          <img src={logo} className="logo" alt="logo" />
          <h1>Listagem de Dispositivos: </h1> <br />
          Id: 5698 <br /> Rota: Bairu <br />
          <img src={separator} className="disp-icon" alt="sep" />
          <br />
          Id: 5697 <br /> Rota: Centro
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dispositivos;
