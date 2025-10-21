import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Greetings from './components/greetings';
import Nopage from './pages/nopage';
import './App.css';

function App() {
  const [showGreetings, setShowGreetings] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.greeting-container', {
        y: '-100%',
        scaleY: 0.1,
        borderRadius: '0 0 10% 10%',
        ease: 'power2.inOut',
        duration: 0.5,
        onComplete: () => setShowGreetings(false),
      });
      // setShowGreetings(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showGreetings) {
    return <Greetings />;
  }
  return (
    <>
      <Router basename="/portfolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Nopage />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
