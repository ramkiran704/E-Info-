import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if(
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ){
        setShowSettings(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        E INFO
      </div>
      <div className={styles.rightSection}>
        <nav className={styles.nav}>
          <Link to="/home" className={styles.navLink}>
            Home
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
        <div
          className={styles.settingsContainer}
          ref={settingsRef}
        >
          <button
            className={styles.settingsButton}
            onClick={() => setShowSettings(!showSettings)}
            title="Settings"
          >
            <i className="fa-solid fa-gear"></i>
          </button>

          {showSettings && (
            <div className={styles.settingsMenu}>

              <a href="/profile" className={styles.listName}>
                Profile
              </a>

              <a href="/help"className={styles.listName}>
                Help
              </a>

            </div>
          )}

        </div>

        {/* Logout */}
        <a href="/" className={styles.navLink}>
          <button className={styles.loginButton}>
            Log Out
          </button>
        </a>

      </div>
    </header>
  );
}