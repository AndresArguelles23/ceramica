// src/components/Pagination.tsx
type Props = {
  page: number;
  total: number;
  perPage: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, total, perPage, onChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (totalPages <= 1) return null;

  const go = (p: number) => {
    const safe = Math.min(Math.max(1, p), totalPages);
    if (safe !== page) onChange(safe);
  };

  const pages = getPages(page, totalPages);

  return (
    <nav className="pagination" aria-label="Paginación de productos">
      <button className="page-btn" onClick={() => go(page - 1)} disabled={page === 1}>
        ← Anterior
      </button>

      <ul className="page-list">
        {pages.map((p, i) =>
          p === "…" ? (
            <li key={`dots-${i}`} className="dots">…</li>
          ) : (
            <li key={p}>
              <button
                className={`page-num ${p === page ? "active" : ""}`}
                aria-current={p === page ? "page" : undefined}
                onClick={() => go(p as number)}
              >
                {p}
              </button>
            </li>
          )
        )}
      </ul>

      <button className="page-btn" onClick={() => go(page + 1)} disabled={page === totalPages}>
        Siguiente →
      </button>
    </nav>
  );
}

/** genera [1, …, 4,5,6, …, 20] */
function getPages(current: number, total: number) {
  const windowSize = 1; // cantidad de vecinos a cada lado
  const pages: (number | "…")[] = [];

  const add = (n: number | "…") => pages.push(n);

  add(1);
  for (let p = current - windowSize; p <= current + windowSize; p++) {
    if (p > 1 && p < total) add(p);
  }
  if (total > 1) add(total);

  // ordenar y quitar duplicados
  const sorted = Array.from(new Set(pages.filter(Boolean) as number[])).sort((a, b) => a - b);

  // insertar puntos si hay saltos
  const withDots: (number | "…")[] = [];
  for (let i = 0; i < sorted.length; i++) {
    withDots.push(sorted[i]);
    const next = sorted[i + 1];
    if (next && next - sorted[i] > 1) withDots.push("…");
  }
  return withDots;
}
