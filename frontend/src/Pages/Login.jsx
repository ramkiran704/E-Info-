import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.appName}>E INFO</h2>
          <h3 className={styles.loginTitle}>LOGIN</h3>
        </div>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <div className={styles.inputWrapper}>
              <i className="fa-solid fa-user"></i>
              <input 
                type="text" 
                id="username" 
                placeholder="Enter username" 
                required 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <i className="fa-solid fa-lock"></i>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter password" 
                required 
              />
            </div>
          </div>
          <button type="submit" className={styles.loginBtn}>
          Login
          </button>
        </form>
        <div className={styles.registerPrompt}>
          <span>Don't have an account? </span>
          <Link path='./Registeration.jsx' to="/register" className={styles.registerLink}>
            Register <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}