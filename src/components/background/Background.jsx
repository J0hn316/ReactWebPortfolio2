import '../background/background.css';
import Img1 from '../../../images/pokeball.png';
import Img2 from '../../../images/digivice.png';

export default function Background() {
  return (
    <div className="game">
      <span>&#127918;</span>
      <span>&#128126;</span>
      <span>
        <img src={Img1} alt="pokeball" />
      </span>
      <span>
        <img src={Img2} alt="digivice" height="100px" />
      </span>
      <span>&#127918;</span>
      <span>&#128126;</span>
      <span>
        <img src={Img1} alt="pokeball" />
      </span>
      <span>
        <img src={Img2} alt="digivice" height="100px" />
      </span>
    </div>
  );
}
