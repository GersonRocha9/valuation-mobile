import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #d9d9d9;
  margin: 1.125rem auto 0 auto;
  align-items: center;
`;

export const Title = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  letter-spacing: 0.06rem;
`;

export const Subtitle = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  font-size: 0.625rem;
  color: #eeeeee;
  margin-bottom: 3.438rem;
`;

export const StarsContainer = styled.div`
  margin-bottom: 0.25rem;
`;

export const Star = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin-right: 0.625rem;
`;
