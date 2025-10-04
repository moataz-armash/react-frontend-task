import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={`card shadow ${styles.card}`}>
      <div className={styles.thumbWrap}>
        <img src={product.image} alt={product.title} className={styles.thumb} />
      </div>
      <div className={styles.body}>
        <h3 title={product.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
