import React, { useState } from 'react'; 
import styles from './Hero.module.css';

const tabData = {
  'HydraLock': {
    image: 'bg2.jpg',
    tagline: 'Delivers long-lasting moisture to keep your skin plump, soft, and refreshed throughout the day.',
  },
  'CalmComplex': {
    image: 'bg1.webp',
    tagline: 'Infused with calming plant extracts to reduce redness and irritation for sensitive skin.',
  },
  'GlowBoost': {
    image: 'bg3.jpg',
    tagline: 'Boosts radiance and evens skin tone for a naturally glowing complexion.',
  },
  'BalanceFix': {
    image: 'bg4.jpg',
    tagline: 'Controls excess oil while keeping your skin perfectly hydrated and smooth.',
  },
  'BarrierShield': {
    image: 'bg5.jpg',
    tagline: 'Protects your skin from pollution and environmental stress for long-term health.',
  },
};

const FeaturesSection = () => {
  const [selectedTab, setSelectedTab] = useState('HydraLock');
  const [taglineKey, setTaglineKey] = useState(0); // To retrigger animation

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setTaglineKey(prev => prev + 1); // Change key to restart animation
  };

  return (
    <>
      {/* New In Section */}
      <section id="features" className={styles.newInSection}>
        <div className={styles.newInContainer}>
          <h2 className={styles.newInTitle}>Top Key Features of Sérène</h2>
          <p className={styles.newInSubtitle}>
            Discover what makes Seren your skin’s new best friend.
            Dive into the top features that make Seren a trusted skincare essential.
          </p>
          <div className={styles.newInImageWrapper}>
            <div className={styles.imageOverlayWrapper}>
              <img 
                src={tabData[selectedTab].image} 
                alt={selectedTab} 
                className={styles.newInImage} 
              />
              <div key={taglineKey} className={`${styles.taglineOverlay} ${styles.fadeIn}`}>
                {tabData[selectedTab].tagline}
              </div>
            </div>

            <div className={styles.newInTabs}>
              {Object.keys(tabData).map((tab) => (
                <button 
                  key={tab} 
                  className={`${styles.tabButton} ${selectedTab === tab ? styles.active : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
