import { Link } from 'react-router-dom';
import '../navbar/navbar.css';

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/resume">
        <p>Resume</p>
      </Link>
      <Link to="/projects">
        <p>My projects</p>
      </Link>
    </div>
  );
}
