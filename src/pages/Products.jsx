import { useEffect, useMemo, useState } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { fetchProducts } from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await fetchProducts();
        if (!alive) return;
        setProducts(data);
      } catch (e) {
        setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    let out = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "price-asc") out.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out.sort((a, b) => b.price - a.price);
    return out;
  }, [products, query, sort]);

  return (
    <section className="container" style={{ padding: "16px 0 24px" }}>
      <h1 style={{ margin: "12px 0 10px" }}>Products</h1>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          margin: "6px 0 16px",
        }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #1f2937",
            background: "#0f172a",
            color: "#e5e7eb",
          }}
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #1f2937",
            background: "#0f172a",
            color: "#e5e7eb",
          }}>
          <option value="relevance">Sort: Relevance</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <ProductList products={filtered} />}
    </section>
  );
}
