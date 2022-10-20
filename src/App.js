import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar";
import { MainHead } from "./components/main-header";
import { About } from "./components/about";
import { Portfolio } from "./components/portfolio";
import { Skills } from "./components/skills";
import { Contact } from "./components/contacts";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainHead />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
