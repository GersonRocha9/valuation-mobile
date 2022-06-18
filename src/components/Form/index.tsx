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
      alert("Por favor, preencha todos os campos obrigatórios");
    } else {
      console.log(name);
      console.log(email);
      console.log(phone);
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
