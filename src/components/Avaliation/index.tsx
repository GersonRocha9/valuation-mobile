import star from "../../assets/images/star.svg";
import { Container, Star, StarsContainer, Subtitle, Title } from "./styles";

interface AvaliationProps {
  title: string;
  subtitle: string;
}

export const Avaliation = ({ title, subtitle }: AvaliationProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      <StarsContainer>
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
      </StarsContainer>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
