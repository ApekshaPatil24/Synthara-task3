// TestimonialSection.jsx
import React from 'react';
import styles from './Hero.module.css';

const testimonials = [
  {
    name: 'Aanya Patel',
    role: 'Model & Influencer',
    message:
      "Sérène has completely transformed my skincare routine. My skin feels softer and brighter every day!",
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Dr. Meera Shah',
    role: 'Dermatologist',
    message:
      "I recommend Sérène to my patients with sensitive skin. It’s gentle, effective, and beautifully packaged.",
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Rohini Desai',
    role: 'Entrepreneur',
    message:
      "The glow is real! I’ve received so many compliments since I started using Sérène.",
    image: 'https://i.pravatar.cc/150?img=61',
  },
];

const TestimonialsSection = () => {
  return (
    <section id='feedback'className={styles.testimonialSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.heading}>
          <h2>What People Say About <span>Sérène</span></h2>
          <p>Real stories. Real results. Discover how Sérène is changing lives.</p>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.avatar} />
              <div className={styles.text}>
                <p>"{testimonial.message}"</p>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
