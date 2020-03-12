import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import InteractiveGlobe from './components/InteractiveGlobe/InteractiveGlobe.js';
import Globe from 'react-globe.gl';
import InformationPlaque from './components/InformationPlaque/InformationPlaque.js';
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

function App() {
  return (
    <div className="App">
    <Particles className='particles'
          params={particlesOptions}
        />
      <Navbar />
      <Globe 
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
      <InteractiveGlobe />
      <InformationPlaque />
      <Footer />
    </div>
  );
}

export default App;
