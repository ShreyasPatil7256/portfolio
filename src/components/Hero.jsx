import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="section-label">Full stack web developer</p>
          <h1 className="hero-title">
            Building clean, fast and <span className="hero-title-accent">purposeful</span> web
            products.
          </h1>
          <p className="hero-text">
            I'm Shreyas Patil — I design and build complete web applications, from database
            schema to pixel-perfect interface, with React, Node.js and modern tooling.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn">
              View my work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>3+</h3>
              <p>Years building products</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>Projects shipped</p>
            </div>
            <div>
              <h3>8</h3>
              <p>Certifications earned</p>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card-main">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <pre>{`const dev = {
  name: "Shreyas Patil",
  role: "Full Stack Developer",
  stack: ["React", "Node",
         "Supabase", "Python"],
  mindset: "ship, learn, repeat"
};`}</pre>
          </div>
          <div className="hero-card hero-card-float">
            <p className="hero-card-float-label">Currently building</p>
            <p className="hero-card-float-value">A real-time dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}
