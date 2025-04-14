import { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Contacts from './components/Contacts';
import TechPage from './components/TechPage';
import Cursor from './components/Cursor';
import Footer from './components/footer';

function App() {
  // Create a reference to the MyProjects section
  const projectsRef = useRef(null);

  // Function to scroll to the projects section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Home onViewProjectsClick={scrollToProjects} />
      <About />
      <MyProjects ref={projectsRef} />
      <TechPage />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
