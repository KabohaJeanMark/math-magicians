import Navbar from './NavBar';
import Header from './Header';
import image from '../assets/mathgirl.png';

const Home = () => (
  <div>
    <div className="navHeader">
      <Header />
      <Navbar />
    </div>
    <div className="container jumbotron">
      <h3>Welcome to the Math Magicians Home Page</h3>
      <img className="img-fluid Center" src={image} alt="A girl practicing Math" />
      <p>Mathematics is another way to think; the fiber connecting the intricacies of the world.</p>
    </div>
  </div>
);

export default Home;
