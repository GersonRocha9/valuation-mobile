import styled from "styled-components";

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
