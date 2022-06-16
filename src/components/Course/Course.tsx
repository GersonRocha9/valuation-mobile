import books from "../../assets/images/books.svg";
import chevronUp from "../../assets/images/chevron.svg";
import styles from "./Course.module.css";

export const Course = () => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseTitle}>
        <p className={styles.courseTitleText}>Todos os módulos</p>
        <a href="#">
          <img src={chevronUp} alt="Seta para cima" />
        </a>
      </div>

      <div className={styles.infoCoursesContainer}>
        <div className={styles.chapterCourse}>
          <p className={styles.numberChapter}>01</p>
        </div>

        <div className={styles.textCourseContainer}>
          <p className={styles.titleCourse}>Bem Vindo ao Curso</p>

          <p className={styles.subtitleCourse}>
            Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato.
          </p>
        </div>

        <div className={styles.lessonContainer}>
          <img src={books} alt="Books" />

          <p className="lessonsQuantity">
            {" "}
            <span>04 aulas</span> - 6min{" "}
          </p>
        </div>

        <div className={styles.lessons}>
          <p className={styles.lessonNumber}>01</p>
          <p className={styles.lessonName}>O que você precisa saber antes de começar</p>
          <p className={styles.lessonTime}>2min</p>
        </div>

        <div className={styles.lessons}>
          <p className={styles.lessonNumber}>02</p>
          <p className={styles.lessonName}>Agenda do Curso</p>
          <p className={styles.lessonTime}>2min</p>
        </div>

        <div className={styles.lessons}>
          <p className={styles.lessonNumber}>03</p>
          <p className={styles.lessonName}>Informações e Grupo</p>
          <p className={styles.lessonTime}>1min</p>
        </div>

        <div className={styles.lessons}>
          <p className={styles.lessonNumber}>04</p>
          <p className={styles.lessonName}>Canais de suporte e contato</p>
          <p className={styles.lessonTime}>1min</p>
        </div>
      </div>
    </div>
  );
};
