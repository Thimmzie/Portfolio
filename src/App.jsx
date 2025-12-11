import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Greetings from './components/greetings';
import Nopage from './pages/nopage';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/projectfull';
import Article from './pages/article';
import './App.css';

function App() {
  const [showGreetings, setShowGreetings] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      gsap.fromTo(
        '.greeting-container',
        {
          z: -200,
          opacity: 0,
          // rotateY: 15,
          scale: 0.6,
          transformOrigin: 'center center',
        },
        {
          scale: 1,
          opacity: 0,
          ease: 'back.inOut',
          rotateY: 0,
          duration: 0.6,
          onComplete: () => setShowGreetings(false),
        }
      );
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  if (showGreetings) {
    return <Greetings isExiting={isExiting} />;
  }
  return (
    <>
      <Router basename="/Portfolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
