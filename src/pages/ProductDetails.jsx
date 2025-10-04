import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../api";
import styles from "./ProductDetails.module.css";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await fetchProductById(id);
        if (!alive) return;
        setProduct(data);
      } catch (e) {
        setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;
  if (!product) return null;

  const addToCart = () => alert(`Added to cart: ${product.title}`);

  return (
    <section className="container" style={{ padding: "20px 0 28px" }}>
      <Link to="/products" style={{ color: "#93c5fd" }}>
        ← Back to products
      </Link>
      <div className={styles.wrap}>
        <div className={styles.media}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.details}>
          <h1>{product.title}</h1>
          <p className="subtitle" style={{ marginTop: 6 }}>
            {product.category}
          </p>
          <p style={{ marginTop: 12, lineHeight: 1.6 }}>
            {product.description}
          </p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <button className="btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
