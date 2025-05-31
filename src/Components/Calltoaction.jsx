import React from 'react';
import styles from './Hero.module.css';

const Calltoaction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Sérène</h2>
        <p className={styles.ctap}>Shop the Collection</p>
        <p className={styles.ctaSubtitle}>
          Elevate your skincare routine with products made to nourish, heal, and reveal your most radiant self 
          — because your skin deserves serenity.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default Calltoaction;
