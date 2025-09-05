export default function GallerySection() {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1577968897966-3d4325b36d3c?q=80&w=1200&auto=format&fit=crop",
      alt: "Taza esmaltada sobre mesa de madera",
      caption: "Tazas esmaltadas · Serie Ámbar",
    },
    {
      src: "https://images.unsplash.com/photo-1608222351210-5b0ae6b2d5b1?q=80&w=1200&auto=format&fit=crop",
      alt: "Platos cerámicos apilados con textura mate",
      caption: "Platos mate · Colección Tierra",
    },
    {
      src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop",
      alt: "Florero minimalista con ramas secas",
      caption: "Florero minimalista",
    },
    {
      src: "https://images.unsplash.com/photo-1542114740389-4d03c1b2d2a9?q=80&w=1200&auto=format&fit=crop",
      alt: "Set para café en cerámica artesanal",
      caption: "Set café · Hecho a mano",
    },
    {
      src: "https://images.unsplash.com/photo-1582582621956-cdbccbc42b48?q=80&w=1200&auto=format&fit=crop",
      alt: "Cuencos de cerámica con esmalte interior",
      caption: "Cuencos · Esmalte interior",
    },
    {
      src: "https://images.unsplash.com/photo-1582582494700-3e4a05a3d363?q=80&w=1200&auto=format&fit=crop",
      alt: "Plato de presentación con borde irregular",
      caption: "Plato de presentación · Borde orgánico",
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
