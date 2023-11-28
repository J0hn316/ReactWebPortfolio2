import Cards from '../components/cards/Cards';
import projects from '../info/projects';
import '../styles/projects.css';

export default function ProjectsPage() {
  function createCard(projects) {
    return (
      <Cards
        key={projects.id}
        id={projects.id}
        name={projects.name}
        img={projects.img}
        description={projects.description}
        link={projects.link}
      />
    );
  }

  return (
    <div className="projectspage">
      <h1>My Current projects</h1>
      <p>Click on GitHub Icon to view project.</p>
      <div className="projects">{projects.map(createCard)}</div>
    </div>
  );
}
