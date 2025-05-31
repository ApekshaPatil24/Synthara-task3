import React, { useState } from 'react';
import styles from './Hero.module.css';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left Side Video + Button */}
        <div className={styles.imageWrapper}>
          <video
            className={styles.image}
            src="seren2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {!showForm && (
            <button onClick={toggleForm} className={styles.contactBtn}>
              Contact Us
            </button>
          )}
        </div>

        {/* Right Side Form */}
        <div className={`${styles.formWrapper} ${showForm ? styles.showForm : ''}`}>
          <h2 className={styles.title}>Let’s Get In Touch</h2>
          <p className={styles.subtitle}>
            We'd love to hear from you. Fill out the form and our team will reach out shortly.
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" required />
              <label>Full Name</label>
            </div>
            <div className={styles.inputGroup}>
              <input type="email" required />
              <label>Email Address</label>
            </div>
            <div className={styles.inputGroup}>
              <textarea required></textarea>
              <label>Your Message</label>
            </div>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
