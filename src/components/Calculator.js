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
      <h1>Let Us do some Math</h1>
      <App />
    </div>
  </div>
);

export default Calculator;
