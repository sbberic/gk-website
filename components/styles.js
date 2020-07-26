import { Button, MenuItem, Typography } from "@material-ui/core";
import { darken, hexToRgb, lighten } from "@material-ui/core/styles";
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
  background-position: center;

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
  h4 {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
  }
`;
export const BackSide = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  transition: transform 0.3s linear;
  transform: rotateY(180deg);
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
    background-color: ${lighten(theme.palette.primary.main, 0.5)};
    color: black;
  `}
  div {
    text-align: center;

    width: 80%;
    font-size: 25px;
  }
`;

export const ImageTypography = styled(Typography)`
  text-transform: uppercase;
  && {
    font-size: 60px;
    font-weight: 600;
    padding: 5px;
  }
  background: linear-gradient(to bottom, white 50%, #ddd1d3 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProgramHighlight = styled.div`
  && {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
    h3 {
      font-weight: 300;
      color: white;
      flex: none;
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
        ${({ theme }) => {
            const rgb = hexToRgb(theme.palette.primary.main);
            return `${rgb.slice(0, rgb.length - 1)}, 0.5)`;
          }}
          25%
      )
      no-repeat,
    ${(props) => `url('${props.img}')`} center/cover;
`;

export const TourContainer = styled.div`
  padding: 20px;
  .thumbs {
    text-align: center;
  }
`;

export const TourBannerTypography = styled(Typography)`
  color: white;
  text-transform: uppercase;
  && {
    font-size: 50px;
    font-weight: 600;
    padding: 5px;
  }
  background: linear-gradient(to bottom, white 50%, #ddd1d3 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionHeader = styled(Typography)`
  ${({ theme }) => `
    && {
      margin: ${theme.spacing() * 8}px 0px ${theme.spacing() * 2}px;
      color: ${theme.palette.primary.main};
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

export const ContactUsContainer = styled.div`
  && {
    margin: 20px 0;
    padding: 20px;
    background-color: ${({ theme }) =>
      lighten(theme.palette.primary.main, 0.5)};
    color: black;
    h4 {
      text-align: center;
    }
    .MuiInputBase-input {
      color: black;
    }
  }
`;
export const AboutUsSectionTitle = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: grid;
  place-items: center;
  height: 200px;
  h3 {
    color: white;
    font-size: 60px;
  }
`;
export const AboutUsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  .left,
  .right {
    flex: 1;
    display: grid;
    place-items: center;
    background-color: #ffcc73;
    .text {
      width: 70%;
    }
  }
`;

export const MapContainer = styled.div`
  margin: 0px 40px;
  display: grid;
  place-items: center;
  position: relative;
  img {
    width: 90%;
  }
  p {
    padding: 20px;
    width: 50%;
    position: absolute;
    bottom: 10%;
    left: 15%;
    background-color: ${({ theme }) => {
      const rgb = hexToRgb(theme.palette.primary.main);
      return `${rgb.slice(0, rgb.length - 1)}, 0.5)`;
    }};
  }
`;

export const DiffBlock = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 50%;
  flex: none;
  color: white;
  display: flex;
  img {
    width: 40%;
  }
  h5 {
    width: 60%;
    color: white;
    display: grid;
    place-items: center;
    padding: 0 60px;
  }
`;

export const TeamMember = styled.div`
  display: grid;
  place-items: center;
  flex: 1;
  .image {
    height: 300px;
    width: 300px;
    background-image: url(${(props) => props.img});
    border-radius: 50%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
  h4 {
    margin-top: 20px;
  }
`;
