import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Project } from '../types/Project';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects py-5">
      <Container>
        <h2 className="text-center mb-5">Mis Proyectos</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
