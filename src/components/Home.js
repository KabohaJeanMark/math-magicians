import Navbar from './NavBar';
import Header from './Header';
import image from '../assets/einstein.jpg';

const Home = () => (
  <div>
    <div className="navHeader">
      <Header />
      <Navbar />
    </div>
    <h1>Welcome to the Math Magicians Home Page</h1>
    <img src={image} alt="Einstein with tongue out" />
    <p>Mathematics is another way to think; the fiber connecting the intricacies of the world.</p>
  </div>
);

export default Home;
