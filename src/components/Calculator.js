import Navbar from './NavBar';
import Header from './Header';
import App from './App';
import '../styles/MathMagicians.css';

const Calculator = () => (
  <div>
    <div className="navHeader">
      <Header />
      <Navbar />
    </div>
    <div className="Calculator">
      <h3>Let Us do some Math</h3>
      <App />
    </div>
  </div>
);

export default Calculator;
