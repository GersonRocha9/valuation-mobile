import styles from "./Form.module.css";

export const Form = () => {
  return (
    <div className={styles.form}>
      <form action="" method="post">
        <p className={styles.formText}>Entre na lista para ser avisado no lançamento do curso</p>

        <input type="text" name="name" id="name" placeholder="Nome" />
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <input type="number" name="whatsapp" id="whatsapp" placeholder="Whatsapp (opcional)" />

        <button type="submit" className={styles.formButton}>
          Entrar na lista
        </button>
      </form>
    </div>
  );
};
