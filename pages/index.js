import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import FlipImage from "../components/FlipImage";
import ProgramCard from "../components/ProgramCard";
import {
  BannerImage,
  GlobalStyle,
  StyledTypography,
} from "../components/styles";
import Testimonial from "../components/Testimonial";
import { feedbacks, mindset, programs } from "../data/data";
import Navbar from "./../components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffb145",
      main: "#fd8006",
      dark: "#c35100",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6659",
      main: "#d32f2f",
      dark: "#9a0007",
      contrastText: "#ffffff",
    },
  },
});

export default function Home() {
  return (
    <div className="container">
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <BannerImage img="/banner.jpg">
            <StyledTypography variant="h2">
              REALIZE YOUR POTENTIAL
              <br></br>
              THROUGH EXPLORING THE WORLD
            </StyledTypography>
          </BannerImage>
          <StyledTypography variant="h3">
            Reinventing the Learning Experience
          </StyledTypography>
          <div style={{ height: "300px", width: "100%", display: "flex" }}>
            {mindset.map((m) => (
              <FlipImage
                key={m.title}
                image={m.img}
                frontText={
                  <StyledTypography variant="h4">{m.title}</StyledTypography>
                }
                backText={m.description}
              ></FlipImage>
            ))}
          </div>
          <StyledTypography variant="h3">Featured Programs</StyledTypography>
          <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            {programs.map((p) => (
              <ProgramCard key={p.title} {...p}></ProgramCard>
            ))}
          </div>
          <StyledTypography variant="h3">Customer Feedback</StyledTypography>
          <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            {feedbacks.map((p) => (
              <Testimonial key={p.title} {...p}></Testimonial>
            ))}
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}
