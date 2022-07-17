import styled from "styled-components";

import menu from "../../assets/images/menu.svg";
import varosLogo from "../../assets/images/varos-logo.svg";

const Header = () => {
  return (
    <Container>
      <Image src={varosLogo} alt="Logomarca da Varos" />
      <Image src={menu} alt="Menu" />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

export const Image = styled.img`
  cursor: pointer;
`;

export default Header;
