export default function ContactSection() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact-inner">

        {/* Lado de texto */}
        <div className="contact-copy">
          <span className="kicker">Contacto</span>
          <h2>¿Hablamos?</h2>
          <p>
            Si quieres encargar material, resolver dudas de envíos o cotizar un proyecto,
            escríbenos. Respondemos rápido.
          </p>

          <ul className="contact-meta">
            <li>
              {/* icono mail */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 13L2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76z"/><path fill="currentColor" d="M22 6l-10 6L2 6l10-4z" opacity=".6"/></svg>
              <a href="mailto:contacto@ceramicaambar.com">contacto@ceramicaambar.com</a>
            </li>
            <li>
              {/* icono whatsapp */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 3.1 17.6L2 22l4.5-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 21 12a9 9 0 0 1-9 9z"/><path fill="currentColor" d="M16.7 13.8c-.2-.1-1.3-.6-1.5-.7s-.3-.1-.5.1-.6.7-.7.8-.3.1-.5 0a7.2 7.2 0 0 1-2.1-1.3 7.9 7.9 0 0 1-1.5-1.9c-.1-.2 0-.3.1-.5l.3-.4c.2-.2.2-.3.3-.5s0-.3 0-.5-.5-1.2-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.4 2.4 0 0 0-.8 1.8 4.2 4.2 0 0 0 .9 2.2 9.6 9.6 0 0 0 3.7 3.6 8.6 8.6 0 0 0 1.8.8 4 4 0 0 0 1.8.1 2 2 0 0 0 1.3-.9c.2-.3.2-.8.1-.9s-.2-.2-.4-.3z" opacity=".8"/></svg>
              <a href="https://wa.me/573105226398" target="_blank" rel="noopener noreferrer">+57 310 522 6398</a>
            </li>
            <li>
              {/* icono location */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
              Colombia · Envíos nacionales
            </li>
          </ul>

          <div className="contact-actions">
            <a
              href="https://wa.me/573105226398"
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

        {/* Formulario en tarjeta */}
        <form
          className="contact-form contact-card"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario de demo — aquí iría la integración real.");
          }}
        >
          <div className="input-row">
            <label>
              Nombre
              <input type="text" required />
            </label>
            <label>
              Correo
              <input type="email" required />
            </label>
          </div>

          <label>
            Mensaje
            <textarea rows={4} required></textarea>
          </label>

          <small className="form-hint">
            Al enviar aceptas ser contactado para resolver tu solicitud.
          </small>

          <button type="submit" className="btn">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
