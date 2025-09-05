import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import AboutSection from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand" style={{ cursor: "pointer" }} onClick={() => scrollToId("hero")}>
            <span className="logo-dot" />
            <strong>Cerámica Ámbar</strong>
          </div>

          <nav className="nav-actions">
            <button className="btn ghost" onClick={() => scrollToId("catalog")}>Catálogo</button>
            <button className="btn" onClick={() => scrollToId("contacto")}>Contactar</button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero hero-cover">
          <div className="container hero-content">
            <span className="eyebrow">Colección Otoño</span>
            <h1>Cerámica artesanal para hogares con alma</h1>
            <p>
              Piezas únicas hechas a mano en Colombia. Texturas cálidas, esmaltes
              naturales y acabados duraderos. No producimos en masa.
            </p>

            <div className="hero-actions">
              <button className="btn" onClick={() => scrollToId("catalog")}>Ver catálogo</button>
              <button className="btn ghost" onClick={() => scrollToId("about")}>Conócenos</button>
            </div>

            <ul className="trust-row">
              <li>Envíos nacionales</li>
              <li>Pagos seguros</li>
              <li>Ediciones limitadas</li>
            </ul>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="catalog" className="catalog container">
          <h2>Catálogo destacado</h2>
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* SOBRE NOSOTROS */}
        {/* Agrega id para el scroll */}
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
      <footer className="container" style={{ padding: "1.2rem 0", opacity: 0.7 }}>
        © 2025 Cerámica Ámbar
      </footer>
    </div>
  );
}
