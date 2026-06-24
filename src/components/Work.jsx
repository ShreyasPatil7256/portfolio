import React from 'react';
import './Work.css';

const projects = [
  {
    name: 'Orbit — team task manager',
    desc: 'A kanban-style project tool with real-time updates via WebSockets and role-based access.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
  },
  {
    name: 'Marketly — analytics dashboard',
    desc: 'Interactive dashboard visualising campaign performance with custom charting and exports.',
    tags: ['Next.js', 'PostgreSQL', 'Chart.js'],
  },
  {
    name: 'Pantry — recipe & grocery app',
    desc: 'A meal-planning app that generates grocery lists and tracks pantry stock automatically.',
    tags: ['React Native', 'Express', 'MongoDB'],
  },
];

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="work-title">Selected projects</h2>

        <div className="work-grid">
          {projects.map((project) => (
            <article key={project.name} className="work-card">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="work-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href="#contact" className="work-link">
                Discuss a project like this →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
