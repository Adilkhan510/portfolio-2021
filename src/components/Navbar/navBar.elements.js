import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "../../Utils/Buttons";
import { primaryColor, darkColor } from "../../globalStyle";
import menuBar from "../../Images/menu.png";

import logo2 from "../../Images/logo2.png";

export const NavContainer = styled.div`
  background-color: ${darkColor};
`;
export const Nav = styled.nav`
  /* max-width: 1300px; */
  margin: 0 auto;
  padding: 1rem 4rem;
  height: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 762px) {
    padding: 1rem;
  }
`;
export const RContainer = styled.div``;
export const LContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 65px;
    height: 65px;
    border-radius: 50px;
    margin-right: 50px;
    @media screen and (max-width: 762px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const MenuLinks = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 50px;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: #3dcfd3;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 762px) {
    display: none;
  }
`;
export const MenuBars = styled(BiMenuAltRight)`
  font-size: 4rem;
  color: whitesmoke;
  display : none;
    @media screen and (max-width: 762px) {
    display: flex;
    height: 50px;
    width: 50px;
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);

`;

export const NavMenu = styled.div``;

export const NavBtn = styled.button`
  ${Button};
  background-color: #3dcfd3;
  color: #161616;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: transparent;
    color: #3dcfd3;
    border-color: #3dcfd3;
  }
  @media screen and (max-width: 762px) {
    display: none;
  }
`;
