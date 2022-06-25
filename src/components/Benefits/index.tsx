import benefit1 from "../../assets/images/benefit-1.svg";
import benefit2 from "../../assets/images/benefit-2.svg";
import benefit3 from "../../assets/images/benefit-3.svg";
import benefit4 from "../../assets/images/benefit-4.svg";
import { Benefit, BenefitDescription, BenefitImage, BenefitsContainer, Container, Title } from "./styles";

export const Benefits = () => {
  return (
    <Container>
      <Title>
        Você, preparado para <span>qualquer situação.</span>
      </Title>

      <BenefitsContainer>
        <Benefit>
          <BenefitImage src={benefit1} alt="Benefício 1" />
          <BenefitDescription>Startups (Valuation por Múltiplos)</BenefitDescription>
        </Benefit>

        <Benefit>
          <BenefitImage src={benefit2} alt="Benefício 2" />
          <BenefitDescription>Empresas em crescimento e maturação (Fluxo de Caixa Descontado</BenefitDescription>
        </Benefit>

        <Benefit>
          <BenefitImage src={benefit3} alt="Benefício 3" />
          <BenefitDescription>Empresas maduras (Modelo de Dividendo Descontado)</BenefitDescription>
        </Benefit>

        <Benefit>
          <BenefitImage src={benefit4} alt="Benefício 4" />
          <BenefitDescription>Empresas em Reestruturação (turn-around)</BenefitDescription>
        </Benefit>
      </BenefitsContainer>
    </Container>
  );
};
