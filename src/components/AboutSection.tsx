export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-copy">
          <h2>Hecho a mano, pieza por pieza</h2>
          <p>
            Somos un taller pequeño en Colombia. Trabajamos con terracota y
            esmaltes de tonos cálidos. Cada pieza pasa por un proceso lento:
            modelado, secado, horneado y acabado. No producimos en masa.
          </p>
          <p>
            Creemos en los objetos que cuentan historias y acompañan la vida
            diaria. Si te gusta lo sencillo, lo imperfecto y lo duradero,
            probablemente te guste lo que hacemos.
          </p>

          <div className="about-facts">
            <div>
              <strong>+300</strong>
              <span>piezas vendidas</span>
            </div>
            <div>
              <strong>5 años</strong>
              <span>de oficio</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>hecho en Colombia</span>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1556227701-0ec504b0204e?q=80&w=1200&auto=format&fit=crop"
            alt="Taller de cerámica artesanal"
            loading="lazy"
          />
          <figcaption>Nuestro taller. Foto de referencia.</figcaption>
        </div>
      </div>
    </section>
  );
}
