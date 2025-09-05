// src/components/Footer.tsx
import { scrollToId } from "../utils/scroll";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Marca */}
        <div className="footer-brand">
          <div className="brand">
            <span className="logo-dot" />
            <strong>Todo Ceramico</strong>
          </div>
          <p className="small">
            Revestimientos cerámicos para pisos, paredes y baños. Envíos en Colombia.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <nav className="footer-links">
          <h4>Explorar</h4>
          <ul>
            <li><button onClick={() => scrollToId("catalog")}>Catálogo</button></li>
            <li><button onClick={() => scrollToId("about")}>Sobre nosotros</button></li>
            <li><button onClick={() => scrollToId("galeria")}>Galería</button></li>
            <li><button onClick={() => scrollToId("contacto")}>Contacto</button></li>
          </ul>
        </nav>

        {/* Contacto */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:contacto@ceramicaambar.com">contacto@ceramicaambar.com</a></li>
            <li>
              <a href="https://wa.me/573105226398" target="_blank" rel="noopener noreferrer">
                WhatsApp: +57 310 522 6398
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} Todo Ceramico</small>
        <button className="btn ghost backtotop" onClick={() => scrollToId("hero")}>
          ↑ Arriba
        </button>
      </div>
    </footer>
  );
}
