import menu from "../../assets/images/menu.svg";
import varosLogo from "../../assets/images/varos-logo.svg";
import { Container, Image } from "./styles";

interface HeaderProps {}

export const Header = () => {
  return (
    <Container>
      <Image src={varosLogo} alt="Logomarca da Varos" />
      <Image src={menu} alt="Menu" />
    </Container>
  );
};
