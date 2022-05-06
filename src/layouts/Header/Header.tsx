import { Heading } from "@chakra-ui/react";
import Background from "assets/tom-cruise.png";

const Header = () => {
  return (
    <div
      style={{
        width: 960,
        margin: "auto",
        padding: 20,
        height: 143,
        color: "#fff",
        backgroundImage: `url(${Background})`,
      }}
    >
      <Heading fontSize="6xl">Tom Cruise Finder</Heading>
    </div>
  );
};

export default Header;
