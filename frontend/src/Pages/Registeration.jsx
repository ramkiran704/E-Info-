import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export default function Registeration() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.appName}>E INFO</h2>
          <h3 className={styles.loginTitle}>Registeration</h3>
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
            <label htmlFor="email">Email</label>
            <div className={styles.inputWrapper}>
              <i className="fa-solid fa-user"></i>
              <input 
                type="text" 
                id="email" 
                placeholder="Enter email" 
                required 
              />
            </div>
          </div>

          

          <div className={styles.inputGroup}>
            <label htmlFor="new password"> New Password</label>
            <div className={styles.inputWrapper}>
              <i className="fa-solid fa-lock"></i>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter new password" 
                required 
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor=" confirm password">Confirm Password</label>
            <div className={styles.inputWrapper}>
              <i className="fa-solid fa-lock"></i>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter new password" 
                required 
              />
            </div>
          </div>
          <button type="submit" className={styles.loginBtn}>
          Register
          </button>
        </form>
        <div className={styles.registerPrompt}>
            <span>You already have an account? </span>
          <Link path='./Login.jsx' to="/" className={styles.registerLink}>
            Login <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}