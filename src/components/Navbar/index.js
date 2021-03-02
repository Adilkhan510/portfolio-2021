import React from "react";
import {
  LContainer,
  Logo,
  MenuLinks,
  Nav,
  NavBtn,
  RContainer,
  NavContainer,
} from "./navBar.elements";
import { menuData } from "../../Data/menuData";
import img1 from "../../Images/logo2.png";

const NavBar = () => {
  return (
    <Nav>
      <LContainer>
        <img src={img1} />
        {menuData.map((item, index) => (
          <MenuLinks to={item.link}>{item.title}</MenuLinks>
        ))}
      </LContainer>
      <RContainer>
        <NavBtn>HELLO</NavBtn>
      </RContainer>
    </Nav>
  );
};

export default NavBar;
