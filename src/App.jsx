import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './pages/home';
import Greetings from './components/greetings';
import Nopage from './pages/nopage';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/projectfull';
import Article from './pages/article';
import './App.css';

function SplashController() {
  const location = useLocation();
  const [showGreetings, setShowGreetings] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    const rawPath = location.pathname || '/';
    const path = rawPath.toLowerCase();

    const isHomePath =
      path === '/' || path === '/home' || path.endsWith('/home') || path === '';
    let navType = 'navigate';
    try {
      const navEntries =
        performance.getEntriesByType &&
        performance.getEntriesByType('navigation');
      if (navEntries && navEntries.length > 0) {
        navType = navEntries[0].type;
      } else if (performance.navigation) {
        navType = performance.navigation.type === 1 ? 'reload' : 'navigate';
      }
    } catch (e) {}
    const visited = sessionStorage.getItem('splashShown');
    if (!visited) {
      setShowGreetings(true);
      sessionStorage.setItem('splashShown', 'true');
    } else if (isHomePath && navType === 'reload') {
      setShowGreetings(true);
    } else {
      setShowGreetings(false);
    }
  }, []);

  if (showGreetings) {
    return <Greetings onFinish={() => setShowGreetings(false)} />;
  }

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Nopage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <SplashController />
    </Router>
  );
}

export default App;
