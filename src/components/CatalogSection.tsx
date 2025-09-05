// src/components/CatalogSection.tsx
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { products } from "../data/products";

const PER_PAGE = 6; // cambia a 9 o 12 si quieres

export default function CatalogSection() {
  const [page, setPage] = useState(1);

  const total = products.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  // segmenta productos según la página
  const slice = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return products.slice(start, end);
  }, [page]);

  // si borras productos y la página queda fuera de rango
  if (page > totalPages) setPage(totalPages || 1);

  return (
    <section id="catalog" className="catalog container">
      <h2>Catálogo destacado</h2>

      <div className="grid">
        {slice.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <Pagination
        page={page}
        total={total}
        perPage={PER_PAGE}
        onChange={setPage}
      />
    </section>
  );
}
