import { NavBar } from "./components/NavBar";
import { Router } from "./routes/routes";

function App() {
  return (
    <>
      <NavBar>
        <Router />
      </NavBar>
    </>
  );
}

export default App;
