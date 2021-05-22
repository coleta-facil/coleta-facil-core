import "./style.scss";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import BaseButton from "../../components/BaseButton";
import logo from "../../assets/icons/logo.svg";
import welcomeImage from "../../assets/icons/welcome-image.svg";

function Home() {
  const history = useHistory();

  return (
    <PageWrapper footerImage>
      <div className="home-page page-content">
        <Header>
          <BaseButton onClick={() => history.push("/login")}>Entrar</BaseButton>
        </Header>

        <main>
          <article className="aside-article">
            <img src={logo} className="logo" alt="logo" />

            <h1 className="title">Gerencie facilmente a coleta de lixo da sua cidade.</h1>
            <p className="paragraph">
              Uma inovação! Um painel gerencial pra você cadastrar, editar, deletar e organizar as
              rotas, datas e horários que os caminhões irão funcionar.
            </p>
            <p className="paragraph">
              Reduza engarrafamentos e agilize o trabalho de quem se esforça pra deixar sua cidade
              mais limpa!
            </p>
          </article>

          <div className="aside-img-wrapper">
            <img draggable={false} src={welcomeImage} alt="Welcome" />
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}

export default Home;
