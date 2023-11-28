import { Routes, Route } from 'react-router-dom';
import Background from './components/background/Background';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div>
      <Background />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
