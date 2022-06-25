import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import varosLogo from "../../assets/images/varos-logo.svg";
import { Arrow, ArrowLink, ArrowsContainer, Container, Image, LogoContainer } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <ArrowsContainer>
        <ArrowLink>
          <Arrow src={arrowLeft} alt="Voltar" />
        </ArrowLink>

        <ArrowLink>
          <Arrow src={arrowRight} alt="Avançar" />
        </ArrowLink>
      </ArrowsContainer>

      <LogoContainer>
        <Image src={varosLogo} alt="Logomarca da Varos" />
      </LogoContainer>
    </Container>
  );
};
