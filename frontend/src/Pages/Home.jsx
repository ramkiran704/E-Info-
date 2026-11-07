import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import styles from './Home.module.css';
import government from "../assets/egovernment.png";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: 'Education', icon: 'fa-graduation-cap', path: '/subpages/education' },
    { name: 'Employment', icon: 'fa-briefcase', path: '/subpages/employment' },
    { name: 'Housing', icon: 'fa-house', path: '/subpages/housing' },
    { name: 'Financial', icon: 'fa-chart-line', path: '/subpages/financial' },
    { name: 'Senior Citizen', icon: 'fa-person-cane', path: '/subpages/senior-citizen' },
    { name: 'Disabled', icon: 'fa-wheelchair', path: '/subpages/disabled-citizen' },
    { name: 'Farmers', icon: 'fa-tractor', path: '/subpages/farmers' },
    { name: 'Healthcare', icon: 'fa-suitcase-medical', path: '/subpages/healthcare' },
    { name: 'Business', icon: 'fa-rocket', path: '/subpages/business' },
    { name: 'Students', icon: 'fa-user-graduate', path: '/subpages/students' }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.imageSection}>
        <img src={government} alt="Government Schemes Banner" />
      </div>
      <div className={styles.mainLayout}>
        <div className={styles.contentArea}>
          <section className={styles.benefitSection}>
            <h2 className={styles.sectionTitle}>Browse Your Benefits</h2>
            <div className={styles.categoryGrid}>
              {categories.map((cat, index) => (
                <button 
                  key={index} 
                  className={styles.categoryCard}
                  onClick={() => navigate(cat.path)}
                >
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