import { useEffect } from 'react';
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
  // Add dark class to html element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <Header />
      <main className="flex flex-col">
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
