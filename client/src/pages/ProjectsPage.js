import React, { useState, useEffect } from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import ProjectCard from '../homepage_components/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')  // 替换为实际的API端点
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Our Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
