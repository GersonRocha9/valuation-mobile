import { Avaliation } from "../../components/Avaliation";
import { Benefits } from "../../components/Benefits";
import { Content } from "../../components/Content";
import { Course } from "../../components/Course";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Content
        title="Domine o método mais usado no mundo para encontrar ações baratas."
        subtitle="Bancos, fundos, investidores. Todos eles usam o Valuation pra fechar bons negócios."
      />

      <Form
        title="Entre na lista para ser avisado no lançamento do curso"
        buttonText="Entrar na lista"
        onSubmit={() => {}}
      />

      <Avaliation title="Avaliação média do curso" subtitle="NPS: 83.6" />

      <Benefits />

      <Course
        title="Todos os módulos"
        numChapter="01"
        titleCourse="Bem Vindo ao Curso"
        subtitleCourse="Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato."
      />

      <Footer />
    </div>
  );
};
