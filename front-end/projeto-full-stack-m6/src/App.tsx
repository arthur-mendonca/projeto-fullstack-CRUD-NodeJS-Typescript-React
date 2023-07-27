import { NavBar } from "./components/NavBar";
import { Footer } from "./components/footer";
import { Router } from "./routes/routes";

function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
