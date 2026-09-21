import React from 'react';
import Header from '../components/Header.jsx';
import styles from './Home.module.css';
import government from "../assets/egovernment.png";
export default function Home(){
    const categories = [
    { name: 'Education', icon: 'fa-graduation-cap' },
    { name: 'Employment', icon: 'fa-briefcase' },
    { name: 'Housing', icon: 'fa-house' },
    { name: 'Financial', icon: 'fa-chart-line' },
    { name: 'Senior Citizen', icon: 'fa-person-cane' },
    { name: 'Disabled', icon: 'fa-wheelchair' },
    { name: 'Farmers', icon: 'fa-tractor' },
    { name: 'Healthcare', icon: 'fa-suitcase-medical' },
    { name: 'Business', icon: 'fa-rocket' },
    { name: 'Students', icon: 'fa-user-graduate' }
  ];
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.imageSection}>
                <img
                src={government}
                />

            </div>
            <div className={styles.mainLayout}>
                <div className={styles.contentArea}>
                    <section className={styles.benefitSection}>
                        <h2 className={styles.sectionTitle}>Browse Your Benefits</h2>
                        <div className={styles.categoryGrid}>
                        {categories.map((cat, index) => (
                            <button key={index} className={styles.categoryCard}>
                            <i className={`fa-solid ${cat.icon} ${styles.catIcon}`}></i>
                            <span>{cat.name}</span>
                            </button>
                        ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}