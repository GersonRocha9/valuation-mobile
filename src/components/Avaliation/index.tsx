import star from "../../assets/images/star.svg";
import { Container, Star, StarsContainer, Subtitle, Title } from "./styles";

interface AvaliationProps {
  title: string;
  subtitle: string;
}

export const Avaliation = (props: AvaliationProps) => {
  return (
    <Container>
      <Title>{props.title}</Title>

      <StarsContainer>
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
        <Star src={star} alt="Estrela" />
      </StarsContainer>

      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
};
