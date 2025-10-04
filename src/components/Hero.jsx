import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>Find your next favorite thing</h1>
          <p className="subtitle">
            Curated items from the Fake Store API. Clean UI, fast and
            responsive.
          </p>
        </div>
      </div>
    </section>
  );
}
