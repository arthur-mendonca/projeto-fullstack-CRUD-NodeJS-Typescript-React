import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/Global.tsx";
import { BrowserRouter } from "react-router-dom";
import LoginProvider from "./contexts/loginContext/loginContext.tsx";
import { ClientsProvider } from "./contexts/clientsContext/clientsContext.tsx";
import { ContactsProvider } from "./contexts/contactsContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <BrowserRouter>
        <LoginProvider>
          <ClientsProvider>
            <ContactsProvider>
              <App />
            </ContactsProvider>
          </ClientsProvider>
        </LoginProvider>
      </BrowserRouter>
    </GlobalStyle>
  </React.StrictMode>
);
