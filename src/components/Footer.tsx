import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <div className="text-center">
          <p className="mb-0">
            &copy; {currentYear} Portfolio - Desarrollo Full Stack II - Duoc UC
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
