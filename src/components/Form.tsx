import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

interface FormProps {
  title: string;
  buttonText: string;
}

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Preencha todos os campos obrigatórios (Nome e E-mail)");
    } else {
      axios
        .post("http://localhost:3000/subs", {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), // ID aleatório
          name,
          email,
          phone,
        })
        .then((response: { data: { id: string; name: string; email: string; phone: string } }) => {
          alert("Cadastro realizado com sucesso");
        })
        .catch((error: { response: { data: { message: string } } }) => {
          console.log(error);
          alert("Erro ao realizar o cadastro");
        });
    }
  };

  return (
    <Container>
      <FormContainer action="/" method="POST" onSubmit={handleSubmit}>
        <Title>{props.title}</Title>

        <Input required type="text" name="name" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input required type="text" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input type="text" name="phone" placeholder="Whatsapp (opcional)" onChange={(e) => setPhone(e.target.value)} />

        <Button type="submit">{props.buttonText}</Button>
      </FormContainer>
    </Container>
  );
};

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

export const FormContainer = styled.form``;

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
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 1px solid #00f729;
    transition: all 0.2s ease-in-out;
  }

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder {
    color: #9e9e9e;
  }
`;

export default Form;
