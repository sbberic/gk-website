import { Button, MenuItem, Typography } from "@material-ui/core";
import { darken } from "@material-ui/core/styles";
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
  height: ${(props) => props.height || 600}px;
  font-size: 40px;
  position: relative;
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

export const ProgramHighlight = styled.div`
  && {
    color: white;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
    h2 {
      padding: 20px;
      text-align: center;
    }
    nav {
      background-color: white;
      color: black;
      border-radius: 10px;
    }
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
  }
`;

export const SampleSchedule = styled.div`
  && {
    height: 600px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 20px;
    h3 {
      font-weight: 300;
      color: white;
      flex: none;
      margin-bottom: 20px;
    }
    nav {
      background-color: white;
      color: black;
      border-radius: 10px;
      flex: 1;
      overflow: scroll;
    }
  }
`;

export const TourImage = styled(BannerImage)`
  background: linear-gradient(
        to bottom left,
        transparent 65%,
        ${({ theme }) => theme.palette.primary.main} 25%
      )
      no-repeat,
    ${(props) => `url('${props.img}')`} center/cover;
`;

export const TourContainer = styled.div`
  padding: 20px;
`;

export const TourBannerTypography = styled(Typography)`
  color: white;
  font-weight: 400 !important;
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 50%;
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
