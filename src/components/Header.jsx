import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoMark}>🛍️</span>
            <span>React Frontend Task</span>
          </NavLink>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }>
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }>
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }>
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
