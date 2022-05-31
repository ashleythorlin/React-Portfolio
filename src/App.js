import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Education from "./pages/education/Education.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Current from "./pages/current/Current.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" 
          element={<Navigate to="/about" />}
        />
        <Route path="/home" 
          element={<Home />}
        />
        <Route path="/about" 
          element={<About />}
        />
        <Route path="/education" 
          element={<Education />}
        />
        <Route path="/Experience" 
          element={<Experience />}
        />
        <Route path="/projects" 
          element={<Projects />}
        />
        <Route path="/current" 
          element={<Current />}
        />
        <Route path="/resume" 
          element={<Resume />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
