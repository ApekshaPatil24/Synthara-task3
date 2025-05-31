import React, { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogItems = [
  { id: 1, title: 'For acne-prone skin themes', name: 'Sérène Clear', image: 'i3.jpg' },
  { id: 2, title: 'For congested and clogged skin', name: 'Sérène Detox', image: 'i4.jpg' },
  { id: 3, title: 'For dry and dehydrated skin', name: 'Sérène Hydrate', image: 'i5.jpg' },
  { id: 4, title: 'For dull and tired skin', name: 'Sérène Glow', image: 'i6.jpg' },
  { id: 5, title: 'For sensitive and irritated skin', name: 'Sérène Calm', image: 'i7.jpg' },
  { id: 6, title: 'For aging and mature skin', name: 'Sérène Renew', image: 'i8.jpg' },
  {id: 7, title: 'For oily and combination skin', name: 'Sérène Balance', image: 'i3.jpg' },
  { id: 8, title: 'For damaged or stressed skin', name: 'Sérène Repair', image: 'i4.jpg' },
  { id: 9, title: 'For skin exposed to pollution and UV ', name: 'Sérène Protect', image: 'i5.jpg' },

];

const GallerySection = () => {
  const scrollRef = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    updateArrows();
    container.addEventListener('scroll', updateArrows);
    return () => container.removeEventListener('scroll', updateArrows);
  }, []);

  return (
    <section id="gallery" className={styles['gallery-section']}>
      <h2 className={styles['section-title1']}><b>Our Glow</b>  </h2>
      <p className={styles['p1']}>collection</p>
      <div className={styles['carousel-wrapper']}>
        {showLeftArrow && (
          <button className={styles['arrow-left']} onClick={() => scroll('left')}>
            <ChevronLeft size={32} />
          </button>
        )}

        <div className={styles['gallery']} ref={scrollRef}>
          {blogItems.map((item) => (
            <div className={styles['gallery-card']} key={item.id}>
              <img src={item.image} alt={item.title} className={styles['gallery-image']} />
              <h3 className={styles['gallery-title']}>{item.title}</h3>
              <p className={styles['gallery-name']}>- {item.name}</p>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button className={styles['arrow-right']} onClick={() => scroll('right')}>
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
