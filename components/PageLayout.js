import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../components/styles";
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

export default function PageLayout({ children, title }) {
  return (
    <div className="container">
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>GK Education - {title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}
