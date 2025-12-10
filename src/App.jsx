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
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.from('.greeting-container', {
        z: '10',
        scale: 0.2,
        opacity: 0,
        ease: 'back.inOut',
        duration: 0.8,
        onComplete: () => setShowGreetings(false),
      });
      // setShowGreetings(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  if (showGreetings) {
    return <Greetings />;
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
