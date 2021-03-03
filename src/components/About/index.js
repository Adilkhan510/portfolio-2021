import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";

import {
  AboutContainer,
  ImageContainer,
  ContentContainer,
  SocialLinks,
  SocialLinksContainer,
} from "./about.Elements";
import img1 from "../../Images/bnw.jpg";
import linkedIn from "../../Images/linkedin.png";
import github from "../../Images/github.png";

const About = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img src={img1} />
      </ImageContainer>
      <ContentContainer>
        <h1>
          About <span>Me</span>
        </h1>
        <h3>Hello I am Adil</h3>
        <p>
          I am a software developer based out of San Francisco, Ca. I have been
          programming for about 1 year now. I LOVE working with react, and
          building a clean frontend. If you would like to discuss a potential
          project please contact me via my email or connect with me on LinkedIn.
        </p>
        <SocialLinksContainer>
          <a href="#">
            <img src={linkedIn} />
          </a>
          <a href="#">
            <img src={github} />
          </a>
        </SocialLinksContainer>
      </ContentContainer>
    </AboutContainer>
  );
};
export default About;
