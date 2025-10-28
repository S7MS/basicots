import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Guias: React.FC = () => {
  const guias = [
    {
      title: 'Guía Completa del Proyecto',
      description: 'Documentación completa sobre la estructura y funcionamiento del proyecto portfolio.',
      file: 'GUIA-COMPLETA-PROYECTO.md'
    },
    {
      title: 'Inicio Rápido',
      description: 'Guía de inicio rápido para configurar y ejecutar el proyecto.',
      file: 'INICIO-RAPIDO.md'
    },
    {
      title: 'Agregar Testing',
      description: 'Tutorial paso a paso para implementar pruebas unitarias con Jasmine y Karma.',
      file: 'GUIA_AGREGAR_TESTING.md'
    }
  ];

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center mb-4">Guías de Desarrollo</h1>
          <p className="text-center text-muted mb-5">
            Documentación y tutoriales para aprender desarrollo con React y TypeScript
          </p>
        </Col>
      </Row>
      
      <Row>
        {guias.map((guia, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{guia.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {guia.description}
                </Card.Text>
                <a
                  href={`/${guia.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Ver Guía
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="alert alert-info">
            <h5>Para los estudiantes:</h5>
            <ul>
              <li>Comienza con la <strong>Guía de Inicio Rápido</strong> para configurar tu entorno</li>
              <li>Revisa la <strong>Guía Completa</strong> para entender la arquitectura del proyecto</li>
              <li>Usa la sección <strong>Tienda Tech</strong> para practicar y la <strong>Guía de Testing</strong> para aprender pruebas unitarias</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Guias;