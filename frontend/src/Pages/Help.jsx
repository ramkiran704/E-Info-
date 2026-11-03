import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import styles from './Help.module.css';

export default function Help() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      question: 'How do I search for government schemes?',
      answer: 'You can navigate to specific categories (such as Farmers, Students, Healthcare, or Employment) directly from the subpages menu or use the main search bar on the homepage.'
    },
    {
      question: 'Is my personal information secure on this portal?',
      answer: 'Yes, all user data is encrypted and managed according to government privacy guidelines.'
    },
    {
      question: 'How can I update my profile details?',
      answer: 'Log in to your account and visit the Profile page to edit your contact and personal information.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.container}>
        <h2>Help & Support Center</h2>
        <p className={styles.subtitle}>Find answers to common questions or reach out to our team.</p>

        <section className={styles.faqSection}>
          <h3>Frequently Asked Questions</h3>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion} 
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <h3>Need More Help? Contact Us</h3>
          {submitted ? (
            <div className={styles.successMessage}>
              Thank you for reaching out! Our support team will get back to you shortly.
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required placeholder="Enter your name" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required placeholder="Enter your email" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message / Query</label>
                <textarea id="message" rows="4" required placeholder="Describe your issue or query..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Submit Query</button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}