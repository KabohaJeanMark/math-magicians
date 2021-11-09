import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ name, buttonClickMethod }) => (
  <div className="Button">
    <button className="eachButton" onClick={() => buttonClickMethod(name)} type="button">{name}</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClickMethod: PropTypes.func.isRequired,
};

export default Button;
