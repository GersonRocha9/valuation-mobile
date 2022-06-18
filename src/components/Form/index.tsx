import { useState } from "react";

import { Button, Container, FormContainer, Input, Title } from "./styles";

// import axios from "axios";

interface FormProps {
  title: string;
  buttonText: string;
}

export const Form = ({ title, buttonText }: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log(name);
    console.log(email);
    console.log(phone);

    // axios.post(`http://localhost:3000/subs`, {
    //   name,
    //   email,
    //   phone,
    // });
  };

  return (
    <Container>
      <FormContainer>
        <Title>{title}</Title>

        <Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input type="text" placeholder="Whatsapp (opcional)" onChange={(e) => setPhone(e.target.value)} />

        <Button type="submit" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </FormContainer>
    </Container>
  );
};
