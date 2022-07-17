import styled from "styled-components";

import benefit1 from "../../assets/images/benefit-1.svg";
import benefit2 from "../../assets/images/benefit-2.svg";
import benefit3 from "../../assets/images/benefit-3.svg";
import benefit4 from "../../assets/images/benefit-4.svg";

const Benefits = () => {
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
          <BenefitDescription>Empresas em crescimento e maturação (Fluxo de Caixa Descontado)</BenefitDescription>
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

export const Container = styled.div``;

export const Title = styled.p`
  font-family: "Termina", sans-serif;
  font-size: 1.125rem;
  color: #e3e3e3;
  text-align: center;

  span {
    color: #00f729;
  }
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.625rem;
  margin-top: 1.875rem;
`;

export const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eeeeee;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.08rem;
  text-align: center;
`;

export const BenefitImage = styled.img`
  margin-bottom: 1.25rem;
`;

export const BenefitDescription = styled.p`
  margin-bottom: 1.75rem;
`;

export default Benefits;
