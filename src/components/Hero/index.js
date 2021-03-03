import React from "react";
import {
  BtnContainer,
  HeroBtn,
  LeftContainer,
  RightContainer,
  HeroContainer,
} from "./hero.Elements";
import pic from "../../Images/dev.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <img src={pic} alt="Profile Picture" />
      </LeftContainer>
      <RightContainer>
        <h6>Adil Khan</h6>
        <h1>
          I am a freelance <span>Programmer</span>
        </h1>
        <p>
          I am a software developer based out of San Francisco, Ca. I have been
          programming for about 1 year now. I LOVE working with react, and
          building a clean frontend. If you would like to discuss a potential
          project please contact me via my email or connect with me on LinkedIn.
        </p>
        <BtnContainer>
          <HeroBtn>CLICK ME</HeroBtn>
        </BtnContainer>
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
