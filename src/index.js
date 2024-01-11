import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 15,
    maxWidth: {
      xxl: 1400,
      xl: 1200,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};
const styledTheme = {};
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={styledTheme}>
      <GridThemeProvider gridTheme={gridTheme}>
        <App/>
      </GridThemeProvider>
    </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
