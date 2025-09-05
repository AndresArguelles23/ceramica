export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        {/* Texto */}
        <div className="about-copy">
          <h2>Revestimientos cerámicos para proyectos reales</h2>
          <p>
            Somos una empresa colombiana dedicada a <strong>pisos, paredes y baños</strong>
            en cerámica y porcelanato. Priorizamos la durabilidad, el diseño atemporal y
            la entrega responsable: stock real y especificaciones claras.
          </p>
          <p>
            Trabajamos con constructores, remodeladores y clientes finales. Si buscas
            <em> textura, resistencia al agua y un acabado limpio</em>, te guiamos desde
            la selección hasta la instalación con recomendaciones técnicas.
          </p>

          {/* Píldoras de confianza */}
          <ul className="about-bullets">
            <li>Antideslizante (opcionales)</li>
            <li>Resistente a humedad</li>
            <li>Fácil mantenimiento</li>
            <li>Garantía de fábrica</li>
          </ul>

          {/* Métricas */}
          <div className="about-facts">
            <div>
              <strong>+120</strong>
              <span>proyectos entregados</span>
            </div>
            <div>
              <strong>7 años</strong>
              <span>de experiencia</span>
            </div>
            <div>
              <strong>Nacional</strong>
              <span>envíos en Colombia</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <figure className="about-visual">
          <img
            src="/images/galeria/4.png"
            alt="Showroom con revestimiento cerámico instalado"
            loading="lazy"
          />
          <figcaption>Acabados en obra. Foto de referencia.</figcaption>
        </figure>
      </div>
    </section>
  );
}
