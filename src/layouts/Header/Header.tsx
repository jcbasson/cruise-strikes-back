import { Heading } from "@chakra-ui/react";
import logo from "assets/tom-cruise.gif";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "0 0 20px 0",
        borderBottom: "1px solid lightgrey",
      }}
    >
      <img src={logo} alt="Tom Cruise" />
      <Heading fontSize="4xl">Tom Cruise Strikes Back</Heading>
    </div>
  );
};

export default Header;
