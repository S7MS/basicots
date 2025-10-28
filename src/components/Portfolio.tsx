import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';

import profileData from '../data/profile.json';
import projectsData from '../data/projects.json';

import { Profile } from '../types/Profile';
import { Project } from '../types/Project';

const Portfolio: React.FC = () => {
  const profile: Profile = profileData;
  const projects: Project[] = projectsData;

  return (
    <>
      <Hero profile={profile} />
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export default Portfolio;