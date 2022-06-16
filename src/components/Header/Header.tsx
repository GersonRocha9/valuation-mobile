import menu from "../../assets/images/menu.svg";
import varosLogo from "../../assets/images/varos-logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={varosLogo} alt="Varos logo" />

      <a href="#">
        <img src={menu} alt="Hamburger Menu" />
      </a>
    </div>
  );
};
