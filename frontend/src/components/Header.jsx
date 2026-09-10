import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>E INFO</div>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
        </nav>
        <button className={styles.loginButton}>Login</button>
      </div>
    </header>
  );
}