import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import styles from './Profile.module.css';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    category: 'Student',
    state: 'Maharashtra'
  });

  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h2>{user.name}</h2>
            <span className={styles.categoryBadge}>{user.category}</span>
          </div>
        </div>

        {isEditing ? (
          <form className={styles.profileForm} onSubmit={handleSave}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="Farmer">Farmer</option>
                <option value="Business">Business</option>
                <option value="Senior Citizen">Senior Citizen</option>
                <option value="Disabled Citizen">Disabled Citizen</option>
              </select>
            </div>

            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.saveBtn}>Save Changes</button>
              <button type="button" className={styles.cancelBtn} onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <div className={styles.detailsContainer}>
            <div className={styles.detailRow}>
              <strong>Email:</strong> <span>{user.email}</span>
            </div>
            <div className={styles.detailRow}>
              <strong>Phone:</strong> <span>{user.phone}</span>
            </div>
            <div className={styles.detailRow}>
              <strong>Category:</strong> <span>{user.category}</span>
            </div>
            <div className={styles.detailRow}>
              <strong>State:</strong> <span>{user.state}</span>
            </div>

            <button className={styles.editBtn} onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
}