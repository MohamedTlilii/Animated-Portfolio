import "./app.scss";
import Cursor from "./components/Cursor/Cursor";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
    <Cursor />
    <section id="Homepage">
      <NavBar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="portfolio" />
    </section>
    <section>
      <Services />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
  </div>
  );
}

export default App;
