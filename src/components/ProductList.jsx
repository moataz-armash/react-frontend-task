import ProductCard from "./ProductCard";

export default function ProductList({ products = [] }) {
  return (
    <section className="container" style={{ paddingBottom: 24 }}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          alignItems: "stretch",
        }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
