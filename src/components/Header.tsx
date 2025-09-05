// src/components/Header.tsx
import { scrollToId } from "../utils/scroll";

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div
          className="brand"
          style={{ cursor: "pointer" }}
          onClick={() => scrollToId("hero")}
        >
          <span className="logo-dot" />
          <strong>Todo Ceramico</strong>
        </div>

        <nav className="nav-actions">
          <button className="btn ghost" onClick={() => scrollToId("catalog")}>
            Catálogo
          </button>
          <button className="btn" onClick={() => scrollToId("contacto")}>
            Contactar
          </button>
        </nav>
      </div>
    </header>
  );
}
