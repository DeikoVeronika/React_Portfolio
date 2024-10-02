import React from 'react';
import { Canvas } from '@react-three/fiber'; // Import Canvas
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Tools from './components/Tools/tools';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import TimeLines from './components/TimeLines/timeLines';
import BlobCanvas from './components/Blob/Blob';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas>
        <BlobCanvas /> {/* BlobCanvas */}
      </Canvas>
      <Intro id="intro" />
      <Skills id="skills" />
      <TimeLines id="timelines" />
      <Works id="works" />
      <Tools id="tools" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
