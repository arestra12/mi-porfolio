import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AcercaDeSection } from "./components/Sections/AcercaDeSection/AcercaDeSection";
import { ContactoSection } from "./components/Sections/ContactoSection/ContactoSection";
import { HabilidadesSection } from "./components/Sections/HabilidadesSection/HabilidadesSection";
import { HeroSection } from "./components/Sections/HeroSection/HeroSection";
import { ProyectosSection } from "./components/Sections/ProyectosSection/ProyectosSection";
import { ScrollTopButton } from "./components/ScrollTopButton/ScrollTopButton";

function App() {
  return (
    <div className="app-container">

      <Header />
      <HeroSection />

      <Main>
        <HabilidadesSection />
        <ProyectosSection />
        <AcercaDeSection />
        <ContactoSection />
      </Main>

      <Footer />

      {/* 🔥 AQUÍ VA */}
      <ScrollTopButton />

    </div>
  );
}

export default App;