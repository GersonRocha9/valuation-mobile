import axios from "axios";
import { useState } from "react";

import { Button, Container, FormContainer, Input, Title } from "./styles";

interface FormProps {
  title: string;
  buttonText: string;
  onSubmit: (data: any) => void;
}

export const Form = ({ title, buttonText, onSubmit }: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Preencha todos os campos");
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
      <FormContainer action="/" method="POST">
        <Title>{title}</Title>

        <Input required type="text" name="name" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input required type="text" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input type="text" name="phone" placeholder="Whatsapp (opcional)" onChange={(e) => setPhone(e.target.value)} />

        <Button type="submit" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </FormContainer>
    </Container>
  );
};
