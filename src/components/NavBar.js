import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Home </Link>
    <Link to="/Calculator">Calculate </Link>
    <Link to="/Quote">Quote </Link>
  </div>
);

export default Navbar;
