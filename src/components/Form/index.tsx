import axios from "axios";
import { useState } from "react";

import { Button, Container, FormContainer, Input, Title } from "./styles";

interface FormProps {
  title: string;
  buttonText: string;
}

export const Form = (props: FormProps) => {
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
