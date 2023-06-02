import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Task from "./components/task";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Container>
          <Task />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
