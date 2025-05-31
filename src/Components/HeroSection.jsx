import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const images = ['i1.png', 'i2.webp', 'i3.jpg', 'i4.jpg', 'i5.jpg', 'i6.jpg','i7.jpg','i8.jpg'];

const HeroSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);  // For mobile menu toggle
  const visibleCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div  id="home"className={styles["hero-wrapper"]}>
      <header className={styles["navbar"]}>
        <div className={styles["logo"]}>Sérène</div>

        {/* Hamburger icon for mobile */}
        <div 
          className={styles["hamburger"]} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {/* 3 bars hamburger icon */}
          <div className={menuOpen ? styles["bar1-active"] : styles["bar1"]}></div>
          <div className={menuOpen ? styles["bar2-active"] : styles["bar2"]}></div>
          <div className={menuOpen ? styles["bar3-active"] : styles["bar3"]}></div>
        </div>

        {/* Navigation links */}
       <nav className={`${styles["nav-links"]} ${menuOpen ? styles["nav-active"] : ''}`}>
  <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
  <a href="#gallery" onClick={() => setMenuOpen(false)}>Visuals</a>  {/* You can add an ID for Collection section if you have */}

  <a href="#feedback" onClick={() => setMenuOpen(false)}>Feedback</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Get in Touch</a>
  <a href="#calltoaction" onClick={() => setMenuOpen(false)}>Try It Today</a>
</nav>

        <div className={styles["nav-right"]}>
          <input className={styles.search} type="text" placeholder="Search product" />
          
        </div>
      </header>

      <div className={styles["hero-section"]}>
        <div className={styles["hero-content"]}>
          <h1>Foundation for<br />radiant, balanced skin</h1>
          <p>Sérène is more than a skincare product; it’s a daily ritual of self-care and renewal. 
            Infused with soothing botanicals and powerful revitalizing actives. </p>
          <button className={styles["hero-btn"]}>Try product</button>
          <button id="visuals"className={styles["hero-btn1"]}>➜</button>
        </div>

        <div className={styles["product-row"]}>
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className={styles["product-image"]}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
