import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5rem 0;
  align-items: center;

  @media screen and (max-width: 762px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 350px;
    height: 400px;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  a img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;

    transition: 0.3s all ease-in-out;
    &:hover {
      width: 50px;
      height: 50px;
    }
  }
`;
// export const SocialLinks = styled(Link)`
//   color: white;
//   width: 200px;
//   height: 200px;
// `;

export const ContentContainer = styled.div`
  width: 35%;
  h1 {
    margin-bottom: 1rem;
    font-weight: 100;
    span {
      color: #3dcfd3;
    }
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  p {
    font-family: lato;
    color: #898989;
    line-height: 1.9;
  }
  @media screen and (max-width: 762px) {
    width: 350px;
    padding: 1rem;
  }
`;
