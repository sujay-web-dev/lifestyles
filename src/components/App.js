import React from "react";
import Header from "./ui/Header";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>Sujay</h1>
    </ThemeProvider>
  );
}

export default App;
