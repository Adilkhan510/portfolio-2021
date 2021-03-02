import React from "react";
import styled from "styled-components";
import { Button } from "../../Utils/Buttons";

export const LeftContainer = styled.div`
  img {
    max-width: 600px;
    max-height: 600px;
    border-radius: 600px;
    margin: 0 1rem;

    @media screen and (max-width: 762px) {
      max-width: 250px;
      max-height: 250px;
      border-radius: 250px;
    }
  }
`;
export const RightContainer = styled.div`
  max-width: 40%;
  padding: 1rem 2rem;
  color: white;

  h1 {
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.2;
    span {
      color: #3dcfd3;
      font-weight: 400;
    }
  }
  h6 {
    margin: 0.5rem 0rem;
    font-size: 1.6rem;
    color: #3dcfd3;
  }
  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

export const BtnContainer = styled.div``;

export const HeroBtn = styled.button`
  ${Button}
  background : transparent;
  color: #3dcfd3;
  border-color: #3dcfd3;
  transition: 0.3s all ease;
  &:hover {
    background: #3dcfd3;
    color: black;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 20%;
  padding: 4rem;
  width: 100vw;

  @media screen and (max-width: 762px) {
    flex-direction: column;
  }
`;
