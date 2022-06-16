import { Avaliation } from "../../components/Avaliation/Avaliation";
import { Benefits } from "../../components/Benefits/Benefits";
import { Content } from "../../components/Content/Content";
import { Course } from "../../components/Course/Course";
import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Form />
      <Avaliation />
      <Benefits />
      <Course />
      <Footer />
    </div>
  );
};
