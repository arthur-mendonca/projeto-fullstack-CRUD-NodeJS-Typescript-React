import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/Global.tsx";
import { BrowserRouter } from "react-router-dom";
import LoginProvider from "./contexts/loginContext/loginContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <BrowserRouter>
        <LoginProvider>
          <App />
        </LoginProvider>
      </BrowserRouter>
    </GlobalStyle>
  </React.StrictMode>
);
