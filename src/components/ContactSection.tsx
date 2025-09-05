export default function ContactSection() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <h2>¿Hablamos?</h2>
          <p>
            Si quieres encargar una pieza, preguntar por envíos o simplemente
            conocernos mejor, escríbenos. Respondemos rápido.
          </p>

          <div className="contact-actions">
            <a
  href="https://wa.me/573001112233"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  WhatsApp directo
</a>

            <a href="mailto:contacto@ceramicaambar.com" className="btn ghost">
              Enviar correo
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario de demo — aquí iría la integración real.");
          }}
        >
          <label>
            Nombre
            <input type="text" required />
          </label>
          <label>
            Correo
            <input type="email" required />
          </label>
          <label>
            Mensaje
            <textarea rows={4} required></textarea>
          </label>
          <button type="submit" className="btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
