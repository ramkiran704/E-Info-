import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import styles from './SubpageLayout.module.css';

export default function SubpageLayout({ title, description, categoryKey, defaultData }) {
  const [schemes, setSchemes] = useState(defaultData || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/schemes/${categoryKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setSchemes(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoryKey]);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.container}>
        <header className={styles.headerBanner}>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>

        {loading ? (
          <div className={styles.loading}>Loading schemes...</div>
        ) : (
          <div className={styles.grid}>
            {schemes.map((scheme) => (
              <div key={scheme.id} className={styles.card}>
                <h3>{scheme.title}</h3>
                <p className={styles.details}>{scheme.details}</p>
                <div className={styles.eligibility}>
                  <strong>Eligibility:</strong> {scheme.eligibility}
                </div>
                <button className={styles.applyBtn}>Apply / Learn More</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}