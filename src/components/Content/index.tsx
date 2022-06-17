import valuationLogo from "../../assets/images/valuation-logo.svg";
import { Container, Image, Subtitle, Title } from "./styles";

interface ContentProps {
  title: string;
  subtitle: string;
}

export const Content = ({ title, subtitle }: ContentProps) => {
  return (
    <Container>
      <Image src={valuationLogo} alt="Logomarca da Valuation 2.0" />
      <Title>{title}</Title> <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
