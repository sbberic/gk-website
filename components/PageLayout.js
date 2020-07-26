import { Divider } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../components/styles";
import Navbar from "./../components/Navbar";
import Footer from "./Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffb145",
      main: "#fd8006",
      dark: "#c35100",
      contrastText: "#fff",
    },
    secondary: {
      light: "#000",
      main: "#000",
      dark: "#000",
      contrastText: "#fff",
    },
  },
});

export default function PageLayout({ children, title }) {
  return (
    <div className="container" style={{ paddingTop: 64 }}>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>GK Education - {title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          {children}
          <Divider style={{ marginTop: 20 }} />
          <Footer />
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}
