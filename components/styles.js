import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { darken } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

export const Section = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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
  height: 600px;
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
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: white;
  `}
  div {
    text-align: center;

    width: 80%;
    font-size: 25px;
  }
`;

export const ImageTypography = styled(Typography)`
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const SectionHeader = styled(Typography)`
  ${({ theme }) => `
    && {
      margin: ${theme.spacing() * 8}px 0px ${theme.spacing() * 2}px;
      color: ${theme.palette.primary.main};
      font-weight: 600;
    }
  `}
`;
export const FlipImageContainer = styled.div`
  flex: 1;
  margin: 5px;
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

export const StyledMenuItem = styled(MenuItem)`
  ${({ theme }) => `
    && {
      color: white;
      background-color: ${theme.palette.primary.main};
      &:hover {
        background-color: ${darken(theme.palette.primary.main, 0.1)};
      }
      a {
        text-decoration: none;
        color: white;
      }
    }
  `}
`;

export const LinkButton = styled(Button)`
  && {
    color: white;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
