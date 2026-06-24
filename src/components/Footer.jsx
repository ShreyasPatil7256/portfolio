import React from 'react';
import './Footer.css';

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const footerSocials = [
  { label: 'GitHub', href: 'hshreyaspatil7256@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shreyaspatil' },
  { label: 'Twitter', href: 'https://twitter.com/shreyaspatil' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Rudra Mankar</h3>
          <p>Full stack web developer crafting clean, purposeful products.</p>
        </div>

        <nav className="footer-nav">
          <p className="footer-heading">Navigate</p>
          <ul>
            {footerNav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-socials">
          <p className="footer-heading">Elsewhere</p>
          <ul>
            {footerSocials.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Shreyas Patil. All rights reserved.</p>
        <a href="#home" className="footer-back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
