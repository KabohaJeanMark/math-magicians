import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  name, buttonClickMethod, color, wide,
}) => (
  <div
    className="Button"
    style={{
      width: wide || '25%',
    }}
  >
    <button
      style={{
        backgroundColor: color || 'lightgrey',
      }}
      className="eachButton"
      onClick={() => buttonClickMethod(name)}
      type="button"
    >
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClickMethod: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
};

export default Button;
