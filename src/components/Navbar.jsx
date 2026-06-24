import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <div className="navbar-left" ref={menuRef}>
          <button
            className={`navbar-menu-toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>

          <a href="#home" className="navbar-name">
            <span className="navbar-name-main">Shreyas Patil</span>
            <span className="navbar-name-sub">Full Stack Web Developer</span>
          </a>

          <nav className={`navbar-dropdown ${open ? 'is-open' : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a href="#contact" className="btn navbar-cta">
          Hire me
        </a>
      </div>
    </header>
  );
}
