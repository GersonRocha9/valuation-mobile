import star from "../../assets/images/star.svg";
import styles from "./Avaliation.module.css";

export const Avaliation = () => {
  return (
    <div className={styles.avaliation}>
      <p className={styles.avaliationText}>Avaliação média do curso</p>

      <div className={styles.stars}>
        <img className={styles.star} src={star} alt="Star" />
        <img className={styles.star} src={star} alt="Star" />
        <img className={styles.star} src={star} alt="Star" />
        <img className={styles.star} src={star} alt="Star" />
        <img className={styles.star} src={star} alt="Star" />
      </div>

      <p className={styles.avaliationSubText}>NPS: 83.6</p>
    </div>
  );
};
