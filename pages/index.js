import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import MindsetCard from "../components/MindsetCard";
import ProgramCard from "../components/ProgramCard";
import {
  BannerImage,
  GlobalStyle,
  ImageTypography,
  Section,
  SectionHeader,
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
            <title>GK Education</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <BannerImage img="/banner.jpg">
            <ImageTypography variant="h2">
              Realize your potential
              <br></br>
              Through exploring the world
            </ImageTypography>
          </BannerImage>
          <SectionHeader variant="h4" align="center">
            Reinventing the learning experience
          </SectionHeader>
          <Section style={{ height: "300px" }}>
            {mindset.map((m) => (
              <MindsetCard
                key={m.title}
                title={m.title}
                img={m.img}
                description={m.description}
              />
            ))}
          </Section>
          <SectionHeader variant="h4" align="center">
            Featured Programs
          </SectionHeader>
          <Section>
            {programs.map((p) => (
              <ProgramCard key={p.title} {...p}></ProgramCard>
            ))}
          </Section>
          <SectionHeader variant="h4" align="center">
            Customer Feedback
          </SectionHeader>
          <Section>
            {feedbacks.map((p) => (
              <Testimonial key={p.title} {...p}></Testimonial>
            ))}
          </Section>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}
