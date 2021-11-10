import Navbar from './NavBar';
import Header from './Header';
import image from '../assets/math.jpg';

const Quote = () => (
  <div>
    <div className="navHeader">
      <Header />
      <Navbar />
    </div>
    <div className="container jumbotron">
      <img src={image} alt="math icon" />
      <p>Human problems arise from man not being able to sit alone in a room and be quiet.</p>
      <p> Blaise Pascal </p>
    </div>
  </div>
);

export default Quote;
