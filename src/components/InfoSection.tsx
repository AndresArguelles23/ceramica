export default function InfoSection() {
  return (
    <section id="info" className="info">
      <div className="container">
        <h2>Información práctica</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Pagos seguros</h3>
            <p>
              Aceptamos transferencias, tarjetas de crédito y débito mediante
              plataformas seguras. Tus datos están protegidos.
            </p>
          </div>
          <div className="info-card">
            <h3>Envíos nacionales</h3>
            <p>
              Hacemos envíos a todo Colombia. Empacamos cada pieza con cuidado
              para que llegue intacta a tu casa.
            </p>
          </div>
          <div className="info-card">
            <h3>Cambios y devoluciones</h3>
            <p>
              Si tu pieza llega dañada o no es lo que esperabas, puedes pedir un
              cambio o devolución en los primeros 7 días.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
