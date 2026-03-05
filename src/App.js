import './App.css';
import { Routes, Route , useLocation } from 'react-router-dom';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import NavBar from './components/navBar';
import particles from './utils.js/particles';


function App() {

  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderparticlesInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js*/}
      {
      renderparticlesInHomePage && (
        <Particles id = "particles" options={particles} init={handleInit}/>
      )}

        
          


      {/* navbar */}
      <NavBar />

      {/* main page contant */}

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>

    </div>
  );
}

export default App;
