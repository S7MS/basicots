import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import NavigationBar from './components/Navbar';
import Portfolio from './components/Portfolio';
import TiendaTech from './components/TiendaTech';
import Guias from './components/Guias';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('portfolio');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <Portfolio />;
      case 'tienda':
        return <TiendaTech />;
      case 'guias':
        return <Guias />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="App">
      <NavigationBar onNavigate={handleNavigate} currentPage={currentPage} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
