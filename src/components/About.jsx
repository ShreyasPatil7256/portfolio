import React from 'react';
import './About.css';

const stack = [
  'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript',
  'Next.js', 'Tailwind CSS', 'GraphQL', 'Docker', 'AWS', 'Git',
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="section-label">About</p>
          <h2 className="about-title">A developer who cares about both ends of the stack</h2>
          <p className="about-paragraph">
            I'm a full stack web developer focused on turning ideas into reliable, scalable
            products. I enjoy the full journey — architecting an API, modelling data, and then
            crafting an interface that feels effortless to use.
          </p>
          <p className="about-paragraph">
            Outside of client work, I contribute to open-source tooling and mentor junior
            developers picking up the MERN stack.
          </p>
        </div>

        <div className="about-stack">
          <p className="about-stack-label">Tools I reach for</p>
          <div className="about-stack-grid">
            {stack.map((tool) => (
              <span key={tool} className="about-chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
