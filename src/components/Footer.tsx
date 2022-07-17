import styled from "styled-components";

import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import varosLogo from "../assets/images/varos-logo.svg";

const Footer = () => {
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  width: 75px;
  justify-content: space-between;
  margin: 3.125rem auto 4.813rem auto;
`;

export const Arrow = styled.img``;

export const ArrowLink = styled.a`
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  margin: 0 auto 1rem auto;
`;

export const Image = styled.img``;

export default Footer;
