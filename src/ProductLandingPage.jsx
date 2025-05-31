import React, { useState, useEffect } from "react";

// Sample data
const features = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: "Experience blazing fast performance and load times.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "Your data is protected with industry-leading security.",
  },
  {
    icon: "⚙️",
    title: "Customizable",
    description: "Tailor every aspect to suit your unique needs.",
  },
];

const galleryImages = [
  "https://source.unsplash.com/800x600/?technology,1",
  "https://source.unsplash.com/800x600/?technology,2",
  "https://source.unsplash.com/800x600/?technology,3",
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Startup Co.",
    text: "This product transformed our workflow completely! Highly recommend.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "Developer",
    text: "Amazing UI and top-notch features, really boosted my productivity.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Alice Lee",
    role: "Designer",
    text: "The design is beautiful and intuitive. Love using it every day.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const pricingPlans = [
  { name: "Basic", price: "$9/mo", features: ["Feature A", "Feature B", "Feature C"] },
  { name: "Pro", price: "$29/mo", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
  { name: "Enterprise", price: "Contact Us", features: ["All Features", "Priority Support"] },
];

export default function ProductLandingPage() {
  // Gallery carousel state
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Testimonial carousel state
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Gallery carousel effect (auto-slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial carousel effect (auto-slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Form validation
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      // Reset form after submit for demo
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#222" }}>
      {/* Hero Section */}
      <section
        style={{
          background: `url('https://source.unsplash.com/1600x900/?technology,product') center/cover no-repeat`,
          color: "white",
          padding: "120px 20px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "900", marginBottom: "20px", textShadow: "2px 2px 6px #000" }}>
          Amazing Product
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            margin: "0 auto 40px",
            textShadow: "1px 1px 3px #000",
          }}
        >
          Revolutionize your workflow with the future of technology.
        </p>
        <button
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          style={{
            backgroundColor: "#ff6f61",
            border: "none",
            padding: "18px 40px",
            borderRadius: "40px",
            fontSize: "1.2rem",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(255, 111, 97, 0.6)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff3b2f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6f61")}
          aria-label="Scroll to Contact Form"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.8rem", marginBottom: "50px", fontWeight: "700", color: "#333" }}>
          Features That Impress
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              style={{
                flex: "1 1 250px",
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{icon}</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#ff6f61" }}>{title}</h3>
              <p style={{ fontSize: "1rem", color: "#555" }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.8rem", marginBottom: "40px", fontWeight: "700", color: "#333" }}>Gallery</h2>
        <div
          style={{
            position: "relative",
            height: "400px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          }}
        >
          <img
            src={galleryImages[galleryIndex]}
            alt="Product Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.8s ease" }}
          />
          {/* Previous/Next buttons */}
          <button
            aria-label="Previous Image"
            onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)}
            style={{
              position: "absolute",
              top: "50%",
              left: "15px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "50%",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              lineHeight: "40px",
            }}
          >
            ‹
          </button>
          <button
            aria-label="Next Image"
            onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)}
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: "50%",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              lineHeight: "40px",
            }}
          >
            ›
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ff6f61",
          color: "white",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
          borderRadius: "20px",
          marginTop: "40px",
          boxShadow: "0 10px 25px rgba(255,111,97,0.4)",
        }}
      >
        <h2 style={{ fontSize: "2.8rem", marginBottom: "40px", fontWeight: "700" }}>What Our Customers Say</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexDirection: "column",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <img
            src={testimonials[testimonialIndex].avatar}
            alt={testimonials[testimonialIndex].name}
            style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "20px" }}
          />
          <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginBottom: "20px" }}>
            "{testimonials[testimonialIndex].text}"
          </p>
          <h4 style={{ margin: 0 }}>{testimonials[testimonialIndex].name}</h4>
          <small>{testimonials[testimonialIndex].role}</small>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.8rem", marginBottom: "50px", fontWeight: "700", color: "#333" }}>Pricing Plans</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {pricingPlans.map(({ name, price, features }) => (
            <div
              key={name}
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "20px",
                padding: "30px",
                width: "260px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ fontSize: "1.8rem", color: "#ff6f61" }}>{name}</h3>
              <p style={{ fontSize: "2rem", fontWeight: "700", margin: "10px 0" }}>{price}</p>
              <ul style={{ listStyle: "none", paddingLeft: 0, color: "#555", textAlign: "left" }}>
                {features.map((f, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    • {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  marginTop: "20px",
                  backgroundColor: "#ff6f61",
                  color: "white",
                  border: "none",
                  borderRadius: "40px",
                  padding: "12px 25px",
                  fontWeight: "600",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff3b2f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6f61")}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          backgroundColor: "#222",
          color: "white",
          maxWidth: "600px",
          margin: "0 auto 60px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
        }}
      >
        <h2 style={{ fontSize: "2.8rem", marginBottom: "30px", fontWeight: "700", textAlign: "center" }}>
          Contact Us
        </h2>
        {formSubmitted && (
          <div
            style={{
              backgroundColor: "#28a745",
              padding: "12px 20px",
              borderRadius: "10px",
              marginBottom: "20px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Thank you for your message! We will get back to you shortly.
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "6px" }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "8px",
                border: formErrors.name ? "2px solid #dc3545" : "2px solid #ccc",
                fontSize: "1rem",
              }}
              aria-invalid={formErrors.name ? "true" : "false"}
            />
            {formErrors.name && (
              <small style={{ color: "#dc3545", fontWeight: "600" }}>{formErrors.name}</small>
            )}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "6px" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "8px",
                border: formErrors.email ? "2px solid #dc3545" : "2px solid #ccc",
                fontSize: "1rem",
              }}
              aria-invalid={formErrors.email ? "true" : "false"}
            />
            {formErrors.email && (
              <small style={{ color: "#dc3545", fontWeight: "600" }}>{formErrors.email}</small>
            )}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "6px" }}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "8px",
                border: formErrors.message ? "2px solid #dc3545" : "2px solid #ccc",
                fontSize: "1rem",
                resize: "vertical",
              }}
              aria-invalid={formErrors.message ? "true" : "false"}
            />
            {formErrors.message && (
              <small style={{ color: "#dc3545", fontWeight: "600" }}>{formErrors.message}</small>
            )}
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#ff6f61",
              color: "white",
              border: "none",
              borderRadius: "40px",
              padding: "15px 0",
              width: "100%",
              fontWeight: "700",
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff3b2f")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6f61")}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          backgroundColor: "#111",
          color: "#888",
          fontSize: "0.9rem",
        }}
      >
        &copy; {new Date().getFullYear()} Amazing Product. All rights reserved.
      </footer>
    </div>
  );
}
