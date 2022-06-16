import valuationLogo from "../../assets/images/valuation-logo.svg";
import styles from "./Content.module.css";

export const Content = () => {
  return (
    <div className={styles.content}>
      <img src={valuationLogo} alt="" />
      <p className={styles.title}>Domine o método mais usado no mundo para encontrar ações baratas.</p>

      <p className={styles.subtitle}>
        Bancos, fundos, investidores. Todos eles usam o Valuation pra fechar bons negócios.{" "}
      </p>
    </div>
  );
};
