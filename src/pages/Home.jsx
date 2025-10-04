import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { fetchProducts } from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await fetchProducts();
        if (!alive) return;
        // show at least 6
        setProducts(data.slice(0, 8));
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

  return (
    <>
      <Hero />
      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <ProductList products={products} />}
    </>
  );
}
