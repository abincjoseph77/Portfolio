import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
function App() {


  return (
    <>
      <Header/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
    </>
  )
}

export default App;
