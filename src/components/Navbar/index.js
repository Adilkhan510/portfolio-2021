import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import {
  LContainer,
  Logo,
  MenuLinks,
  Nav,
  NavBtn,
  RContainer,
  NavContainer,
  MenuBars,
} from "./navBar.elements";
import { menuData } from "../../Data/menuData";
import img1 from "../../Images/logo2.png";

const NavBar = () => {
  return (
    <Nav>
      <LContainer>
        <img src={img1} />
      </LContainer>
      <RContainer>
        {menuData.map((item, index) => (
          <MenuLinks to={item.link}>{item.title}</MenuLinks>
        ))}
        <NavBtn>HELLO</NavBtn>
      </RContainer>
      <MenuBars />
    </Nav>
  );
};

export default NavBar;
