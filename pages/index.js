import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { orange, amber } from "@material-ui/core/colors";
import Navbar from "./../components/Navbar";
import {
  BannerImage,
  BannerText,
  GlobalStyle,
  StyledTypography,
} from "../components/styles";
import FlipImage from "../components/FlipImage";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: amber,
  },
});

export default function Home() {
  return (
    <div className="container">
      <GlobalStyle />
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
          <FlipImage
            image="/banner.jpg"
            frontText={
              <StyledTypography variant="h4">Environment</StyledTypography>
            }
            backText="Combining classroom and experiential learning"
          ></FlipImage>
          <FlipImage
            image="/banner.jpg"
            frontText={
              <StyledTypography variant="h4">Classmates</StyledTypography>
            }
            backText="Meet people from diverse backgrounds and cultures"
          ></FlipImage>
          <FlipImage
            image="/banner.jpg"
            frontText={<StyledTypography variant="h4">Goal</StyledTypography>}
            backText="Curriculum that emphasizes growth mindset, problem solving and impact"
          ></FlipImage>
          <FlipImage
            image="/banner.jpg"
            frontText={
              <StyledTypography variant="h4">Experience</StyledTypography>
            }
            backText="Immerse in real world activities, discussions and reflections"
          ></FlipImage>
        </div>
      </ThemeProvider>
    </div>
  );
}
