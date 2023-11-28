import '../header/header.css';
import Img1 from '../../../images/Me.jpg';

export default function Header() {
  return (
    <div className="Home">
      <div>
        <h1>Hello I'm John C.Wrimene. </h1>
        <img className="img-circle" src={Img1} alt="Image of me" />
      </div>
      <p>Thank you for taking the time to view My Web Portfolio.</p>
      <p>
        I'm a passionate full-stack web developer in the Cincinnati Area. I
        enjoy making projects related to video games and anime I watch as a kid.
        I'm someone approaches each project with 100% effort with the client in
        mind.I work great with a team or alone. I'm highly motivated and
        learning new things.
      </p>
    </div>
  );
}
