import React from 'react';
import './Certifications.css';

const certifications = [
  { title: 'Meta — Full Stack Developer Certificate', year: '2024' },
  { title: 'AWS Certified Developer — Associate', year: '2024' },
  { title: 'MongoDB Certified Developer', year: '2023' },
  { title: 'freeCodeCamp — JavaScript Algorithms & Data Structures', year: '2022' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 className="certifications-title">Credentials I've earned</h2>

        <ul className="certifications-list">
          {certifications.map((cert) => (
            <li key={cert.title}>
              <span className="certifications-name">{cert.title}</span>
              <span className="certifications-year">{cert.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
