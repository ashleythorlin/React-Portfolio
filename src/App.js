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
        <Route path="/React-Portfolio" 
          element={<Home />}
        />
        <Route path="/React-Portfolio/about" 
          element={<About />}
        />
        <Route path="/React-Portfolio/education" 
          element={<Education />}
        />
        <Route path="/React-Portfolio/Experience" 
          element={<Experience />}
        />
        <Route path="/React-Portfolio/projects" 
          element={<Projects />}
        />
        <Route path="/React-Portfolio/current" 
          element={<Current />}
        />
        <Route path="/React-Portfolio/resume" 
          element={<Resume />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
