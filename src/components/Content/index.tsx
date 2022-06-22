import valuationLogo from "../../assets/images/valuation-logo.svg";
import { Container, Image, Subtitle, Title } from "./styles";

interface ContentProps {
  title: string;
  subtitle: string;
}

export const Content = (props: ContentProps) => {
  return (
    <Container>
      <Image src={valuationLogo} alt="Logomarca da Valuation 2.0" />
      <Title>{props.title}</Title> <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
};
