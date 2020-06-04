import styled, { createGlobalStyle } from "styled-components";
import Typography from "@material-ui/core/Typography";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;
export const TextImage = styled.div`
  display: flex;
  background-image: ${(props) => `url('${props.img}')`};
  background-size: cover;
  background-position-y: center;

  align-items: center;
  justify-content: center;
`;

export const BannerImage = styled(TextImage)`
  width: 100%;
  height: 400px;
  font-size: 40px;
`;

export const FrontImage = styled(TextImage)`
  transition: transform 0.3s linear;
  transform: rotateY(0deg);
  height: 100%;
  backface-visibility: hidden;
  font-size: 30px;
  font-weight: 600;
`;
export const BackSide = styled.div`
  transition: transform 0.3s linear;
  transform: rotateY(180deg);
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  div {
    text-align: center;

    width: 80%;
    font-size: 25px;
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
`;
export const FlipImageContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  &:hover {
    ${FrontImage} {
      transform: rotateY(180deg);
    }
    ${BackSide} {
      transform: rotateY(0deg);
    }
  }
`;
