import benefit1 from "../../assets/images/benefit-1.svg";
import benefit2 from "../../assets/images/benefit-2.svg";
import benefit3 from "../../assets/images/benefit-3.svg";
import benefit4 from "../../assets/images/benefit-4.svg";
import styles from "./Benefits.module.css";

export const Benefits = () => {
  return (
    <div className={styles.benefitsContainer}>
      <p className={styles.benefitsText}>
        Você, preparado para <span>qualquer situação.</span>{" "}
      </p>

      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <img className={styles.benefitImage} src={benefit1} alt="Benefit 1" />
          <p className={styles.benefitText}>Startups (Valuation por Múltiplos)</p>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src={benefit2} alt="Benefit 2" />
          <p className={styles.benefitText}>Empresas em crescimento e maturação (Fluxo de Caixa Descontado</p>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src={benefit3} alt="Benefit 3" />
          <p className={styles.benefitText}>Empresas maduras (Modelo de Dividendo Descontado)</p>
        </div>

        <div className={styles.benefit}>
          <img className={styles.benefitImage} src={benefit4} alt="Benefit 4" />
          <p className={styles.benefitText}>Empresas em Reestruturação (turn-around)</p>
        </div>
      </div>
    </div>
  );
};
