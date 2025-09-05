import AboutSection from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { scrollToId } from "./utils/scroll";
import CatalogSection from "./components/CatalogSection";

export default function App() {
  return (
    <div className="page">
      {/* HEADER */}
      <Header />

      <main>
        {/* HERO */}
        <section id="hero" className="hero hero-cover">
          <div className="container hero-content">
            <h1>Cerámica artesanal para hogares con alma</h1>
            <p>
              Piezas únicas hechas a mano en Colombia. Texturas cálidas, esmaltes
              naturales y acabados duraderos. No producimos en masa.
            </p>

            <div className="hero-actions">
              <button className="btn" onClick={() => scrollToId("catalog")}>
                Ver catálogo
              </button>
              <button className="btn ghost" onClick={() => scrollToId("about")}>
                Conócenos
              </button>
            </div>

            <ul className="trust-row">
              <li>Envíos nacionales</li>
              <li>Pagos seguros</li>
              <li>Ediciones limitadas</li>
            </ul>
          </div>
        </section>

        {/* CATÁLOGO (paginado) */}
        <CatalogSection />

        {/* SOBRE NOSOTROS */}
        <section id="about">
          <AboutSection />
        </section>

        {/* INFORMACIÓN PRÁCTICA */}
        <InfoSection />

        {/* GALERÍA */}
        <GallerySection />

        {/* CONTACTO */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
