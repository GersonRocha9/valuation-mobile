import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  background: rgba(255, 255, 255, 0.15);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 22px;
  padding: 1.875rem;
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 600;
  font-size: 0.938rem;
  color: #ffffff;
  margin-bottom: 1.25rem;
  letter-spacing: 0.03rem;
  line-height: 1.125rem;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 7px;
  border: 1px solid #00f729;
  padding: 0.8rem;
  margin-bottom: 1.25rem;
  font-family: "Termina", sans-serif;
  font-size: 0.875rem;
  color: #eeeeee;
  background-color: #131313;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #00f729;
    color: #131313;
    transition: all 0.2s ease-in-out;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 7px;
  border: none;
  padding: 0.625rem 1rem;
  margin-bottom: 1.25rem;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: #131313;
  background-color: #d9d9d9;
  transition: 0.3s;

  &:focus {
    outline: 1px solid #00f729;
    transition: 0.3s;
  }

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder {
    color: #9e9e9e;
  }
`;
