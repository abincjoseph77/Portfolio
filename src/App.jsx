import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <main>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;