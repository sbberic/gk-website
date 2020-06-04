import React from "react";
import { FrontImage, FlipImageContainer, BackSide } from "./styles";
function FlipImage({ image, frontText, backText }) {
  return (
    <FlipImageContainer>
      <FrontImage img={image}>{frontText}</FrontImage>
      <BackSide>
        <div>{backText}</div>
      </BackSide>
    </FlipImageContainer>
  );
}

export default FlipImage;
