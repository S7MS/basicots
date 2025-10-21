import React from 'react';
import { Container } from 'react-bootstrap';
import { Profile } from '../types/Profile';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="hero bg-primary text-white py-5">
      <Container>
        <div className="text-center py-5">
          <h1 className="display-4 fw-bold mb-3">{profile.nombre}</h1>
          <h2 className="h3 mb-4">{profile.titulo}</h2>
          <p className="lead mb-4">{profile.descripcion}</p>
          <div className="d-flex gap-3 justify-content-center">
            {profile.github && (
              <a href={profile.github} className="btn btn-light" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
