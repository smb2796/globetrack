import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import InteractiveGlobe from './components/InteractiveGlobe/InteractiveGlobe.js';
import Globe from 'react-globe.gl';
import InformationPlaque from './components/InformationPlaque/InformationPlaque.js';
import InteractionPanel from './components/InteractionPanel/InteractionPanel.js';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
      "particles": {
          "number": {
              "value": 250,
              "density": {
                  "enable": true,
                  "value_area": 1500
              }
          },
          "line_linked": {
              "enable": true,
              "opacity": 0.02
          },
          "move": {
              "direction": "right",
              "speed": 0.05
          },
          "size": {
              "value": 1
          },
          "opacity": {
              "anim": {
                  "enable": true,
                  "speed": 1.4,
                  "opacity_min": 0.05
              }
          }
      },
      "interactivity": {
          "events": {
              "onclick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "particles_nb": 1
              }
          }
      },
      "retina_detect": true
  }

const { useEffect, useRef } = React;

function App() {
  const globeEl = useRef();
  useEffect(() => {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.1;
    }, []);

  return (
    <div className="App">
    <Particles className='particles'
          params={particlesOptions}
        />
      <Navbar />
      <Globe 
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </div>
  );
}

export default App;
