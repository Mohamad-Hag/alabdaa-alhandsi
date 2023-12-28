import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
