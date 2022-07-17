import styled from "styled-components";

import Avaliation from "../../components/Avaliation";
import Benefits from "../../components/Benefits";
import Content from "../../components/Content";
import Course from "../../components/Course";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />

      <Content
        title="Domine o método mais usado no mundo para encontrar ações baratas."
        subtitle="Bancos, fundos, investidores. Todos eles usam o Valuation pra fechar bons negócios."
      />

      <Form title="Entre na lista para ser avisado no lançamento do curso" buttonText="Entrar na lista" />

      <Avaliation title="Avaliação média do curso" subtitle="NPS: 83.6" />

      <Benefits />

      <Course
        title="Todos os módulos"
        numChapter="01"
        titleCourse="Bem Vindo ao Curso"
        subtitleCourse="Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato."
      />

      <Footer />
    </Container>
  );
};

export const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  padding: 1.875rem;
  background-image: url("../../../src/assets/images/bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #131313;
`;

export default Home;
