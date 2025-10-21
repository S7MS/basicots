import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

import profileData from './data/profile.json';
import projectsData from './data/projects.json';

import { Profile } from './types/Profile';
import { Project } from './types/Project';

function App() {
  const profile: Profile = profileData;
  const projects: Project[] = projectsData;

  return (
    <div className="App">
      <Hero profile={profile} />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
