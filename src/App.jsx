import Header from "./components/header";
import "./App.css";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import BeneficiosModernos from "./components/Beneficios";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import About from "./components/About";
import Contact from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Servicios/>
        <BeneficiosModernos/>
        <Proyectos/>
        <Tecnologias/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
  