import { ClientsProvider } from "./contexts/clientsContext/clientsContext";
import { Router } from "./routes/routes";

function App() {
  return (
    <>
      <ClientsProvider>
        <Router />
      </ClientsProvider>
    </>
  );
}

export default App;
