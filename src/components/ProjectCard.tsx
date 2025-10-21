import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={project.imagen} alt={project.titulo} />
      <Card.Body>
        <Card.Title>{project.titulo}</Card.Title>
        <Card.Text>{project.descripcion}</Card.Text>
        <div className="mb-3">
          {project.tecnologias.map((tech, index) => (
            <Badge key={index} bg="primary" className="me-2 mb-2">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="d-flex gap-2">
          {project.repositorio && (
            <a href={project.repositorio} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
              Ver Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
