import { Heading } from "@chakra-ui/react";
import logo from "assets/tom-cruise.gif";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20;
  padding: 0 0 20px 0;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Tom Cruise" />
      <Heading fontSize="4xl">Tom Cruise Strikes Back</Heading>
    </Container>
  );
};

export default Header;
