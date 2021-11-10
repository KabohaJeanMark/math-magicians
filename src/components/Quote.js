import Navbar from './NavBar';
import Header from './Header';
import image from '../assets/einstein.jpg';

const Quote = () => (
  <div>
    <div className="navHeader">
      <Header />
      <Navbar />
    </div>
    <div className="container jumbotron">
      <img src={image} alt="Albert Einstein with his tongue out" />
      <p>&#34;Everybody is a genius.</p>
      <p>But if you judge a fish by its ability to climb a tree...</p>
      <p>It will live its whole life believing that it is stupid.&#34;</p>
      <p> Albert Einstein </p>
    </div>
  </div>
);

export default Quote;
