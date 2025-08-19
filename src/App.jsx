import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Add dark class to html element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'certificates':
        return <Certificates />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;

