/* eslint-disable react/jsx-no-undef */
// 1. Estilos Globais (Sempre no topo para garantir a base do design)
import "./styles/globals.css";

// 2. Componentes de UI/Layout (Elementos que aparecem em múltiplas páginas ou estruturais)
import { Navbar } from "./components/Navbar/Navbar";

// 3. Seções da Página (Seguindo a ordem visual de renderização)
import { Hero } from "./sections/Hero/Hero";
import { Tech } from "./sections/Tech/Tech";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import{ Footer } from "./sections/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
