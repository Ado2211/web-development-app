import React from 'react';
import './App.css';
import {Header, Navbar, RecommendedServices, Needs, LastProjects, Contact, Footer }from './components';

const App = () => {
  return (
    

      <div className="app">
        <Navbar />
        <Header  />
        <RecommendedServices  />
        <Needs  />
        <LastProjects />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;
