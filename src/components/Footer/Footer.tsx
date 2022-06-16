import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import varosLogo from "../../assets/images/varos-logo.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.arrowsContainer}>
        <a href="#">
          <img src={arrowLeft} alt="Voltar" />
        </a>

        <a href="#">
          <img src={arrowRight} alt="Avançar" />
        </a>
      </div>

      <div className={styles.logoContainer}>
        <img src={varosLogo} alt="Varos Logo" />
      </div>
    </div>
  );
};
