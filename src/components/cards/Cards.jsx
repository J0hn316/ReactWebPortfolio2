import '../cards/cards.css';

export default function Cards(props) {
  return (
    <div>
      <div className="projectCards">
        <h2>{props.name}</h2>
        <img className="img-block" src={props.img} alt="image" />
        <p>{props.description}</p>
        <a href={props.link} target="_blank">
          <i className="fab fa-github-square fa-2x gitHubIcon i"></i>
        </a>
      </div>
    </div>
  );
}
