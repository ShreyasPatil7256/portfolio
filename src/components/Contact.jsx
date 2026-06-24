import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-text">
          <p className="section-label">Contact</p>
          <h2 className="contact-title">Let's build something together</h2>
          <p className="contact-paragraph">
            Have a project in mind, or just want to talk shop? My inbox is open.
          </p>

          <ul className="contact-links">
            <li>
              <a href="mailto:shreyaspatil7256@gmail.com">shreyaspatil7256@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/ShreyasPatil7256" target="_blank" rel="noreferrer">
                github.com/ShreyasPatil7256
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/ShreyasPatil" target="_blank" rel="noreferrer">
                linkedin.com/in/shreyaspatil
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Tell me about your project" required />

          <button type="submit" className="btn">
            {submitted ? 'Message sent ✓' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
