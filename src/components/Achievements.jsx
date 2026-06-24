import React from 'react';
import './Achievements.css';

const achievements = [
  { value: '1st place', label: 'National Hackathon 2024 — built a disaster-relief routing app' },
  { value: 'Top 50', label: 'Google Developer Student Club regional coding challenge' },
  { value: '5,000+', label: 'Monthly users on a self-built SaaS side project' },
  { value: 'Speaker', label: 'Local React meetup talk on performance optimisation' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <p className="section-label">Achievements</p>
        <h2 className="achievements-title">Milestones along the way</h2>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div key={item.label} className="achievements-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
