import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const histo = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={histo}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
