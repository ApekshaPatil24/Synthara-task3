import React from 'react';
import styles from './Hero.module.css';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container1}>
        {/* Logo & Tagline */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>Sérène</h3>
          <p className={styles.tagline}>Nourish. Restore. Glow Naturally.</p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <a href="#hero">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="#feedback">Feedback</a>
        </div>

        {/* Newsletter / Social */}
        <div className={styles.subscribe}>
          <p>Subscribe for sérène updates</p>
          <form className={styles.form1}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
            <div className={styles.socials}>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaPinterestP /></a>
</div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Sérène Skincare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
