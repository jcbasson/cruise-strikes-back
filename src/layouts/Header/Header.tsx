import { Heading } from "@chakra-ui/react";
import logo from "assets/tom-cruise.gif";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        width: 960,
        margin: "auto",
      }}
    >
      <img src={logo} alt="Tom Cruise" width={100} />

      <Heading fontSize="6xl">Tom Cruise Finder</Heading>
    </div>
  );
};

export default Header;
