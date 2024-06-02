import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";

import "./Navbar.css";

function Navbar() {
  return (
    <Flex id="navbar" p={3}>
      <Spacer />
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/productDetails">ProductDetails</Link>
      <Spacer />
    </Flex>
  );
}

export default Navbar;
