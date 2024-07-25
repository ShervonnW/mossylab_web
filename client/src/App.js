import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import TerrariumsPage from './pages/TerrariumsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terrariums" element={<TerrariumsPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
