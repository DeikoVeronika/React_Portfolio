import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Tools from './components/Tools/tools';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import TimeLines from './components/TimeLines/timeLines';

function App() {
  return (
  <div className="App">
      <Navbar/>
      <Intro id="intro"/>
      <Skills id="skills"/>
      <TimeLines id="timelines"/>
      <Works id="works"/>
      <Tools id="tools"/>
      <Contact id="contact"/>
      <Footer />
  </div>
  );
}

export default App;
