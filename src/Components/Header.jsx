import React from "react";

import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>TechyStar.</h1>
      <main>
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/about"}>About</HashLink>
        <HashLink to={"/product"}>Product</HashLink>
        <HashLink to={"/services"}>Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;