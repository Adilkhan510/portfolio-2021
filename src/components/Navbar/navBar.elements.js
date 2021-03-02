import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Utils/Buttons";
import { primaryColor, darkColor } from "../../globalStyle";

import logo2 from "../../Images/logo2.png";

export const NavContainer = styled.div`
  background-color: ${darkColor};
`;
export const Nav = styled.nav`
  max-width: 1152px;
  margin: 0 auto;
  padding: 2rem 0;
  height: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const RContainer = styled.div``;
export const LContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 50px;
  }
`;

export const MenuLinks = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 50px;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: ${primaryColor};
  }
`;
export const Logo = styled(Link)`
  width: 100px;
  height: 100px;
  background-image: src(logo2);
`;

export const NavMenu = styled.div``;

export const NavBtn = styled.button`
  ${Button};
  background-color: #3dcfd3;
  color: #161616;
  transition : 0.3s all ease-in-out;

  &:hover { 
    background : transparent;
    color : #3dcfd3;
    border-color : #3dcfd3
`;
