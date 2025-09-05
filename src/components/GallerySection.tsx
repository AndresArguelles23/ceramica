export default function GallerySection() {
  const items = [
  {
    src: "/images/galeria/1.png",
    alt: "Baño moderno con cerámica gris",
    caption: "Baño minimalista en tonos grises",
  },
  {
    src: "/images/galeria/4.png",
    alt: "Cocina con piso de mármol blanco",
    caption: "Cocina elegante en mármol blanco",
  },
  {
    src: "/images/galeria/5.png",
    alt: "Ducha revestida con cerámica mate",
    caption: "Ducha con acabado mate y limpio",
  },
    {
    src: "/images/galeria/1.png",
    alt: "Baño moderno con cerámica gris",
    caption: "Baño minimalista en tonos grises",
  },
  {
    src: "/images/galeria/4.png",
    alt: "Cocina con piso de mármol blanco",
    caption: "Cocina elegante en mármol blanco",
  },
  {
    src: "/images/galeria/5.png",
    alt: "Ducha revestida con cerámica mate",
    caption: "Ducha con acabado mate y limpio",
  },
  ];

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="gallery-head">
          <h2>Galería / Inspiración</h2>
          <p>Así se ven nuestras piezas en uso real. Texturas, luz y vida cotidiana.</p>
        </div>

        <div className="gallery-grid">
          {items.map((it, i) => (
            <figure key={i} className="gallery-item">
              <img src={it.src} alt={it.alt} loading="lazy" />
              <figcaption>{it.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
