import { Button, Container, Input, Title } from "./styles";

interface FormProps {
  title: string;
  buttonText: string;
  onSubmit: () => void;
}

export const Form = ({ title, buttonText, onSubmit }: FormProps) => {
  return (
    <Container>
      <form action="" method="post">
        <Title>{title}</Title>

        <Input type="text" name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="text" name="phone" placeholder="Telefone" />

        <Button type="submit" onClick={onSubmit}>
          {buttonText}
        </Button>
      </form>
    </Container>
  );
};
