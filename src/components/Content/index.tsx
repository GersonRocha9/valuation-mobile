import styled from "styled-components";

import valuationLogo from "../../assets/images/valuation-logo.svg";

interface ContentProps {
  title: string;
  subtitle: string;
}

const Content = (props: ContentProps) => {
  return (
    <Container>
      <Image src={valuationLogo} alt="Logomarca da Valuation 2.0" />
      <Title>{props.title}</Title> <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
};

export const Container = styled.div`
  width: 308px;
`;

export const Image = styled.img``;

export const Title = styled.p`
  font-family: "Termina", sans-serif;
  font-size: 1.35rem;
  font-weight: bold;
  margin-top: 1.875rem;
  margin-bottom: 0.625rem;
  color: #e3e3e3;
`;

export const Subtitle = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  width: 253px;
  font-size: 1.1rem;
  color: #c0bdbd;
`;

export default Content;
