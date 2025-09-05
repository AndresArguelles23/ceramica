type Props = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: Props) {
  return (
    <div className="card product-card">
      <div className="thumb">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>${price.toLocaleString("es-CO")}</p>
        <button className="btn">Comprar</button>
      </div>
    </div>
  );
}
