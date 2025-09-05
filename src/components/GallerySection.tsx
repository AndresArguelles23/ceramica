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
