import PropTypes from 'prop-types';

const Button = ({ name, buttonClickMethod }) => (
  <>
    <button onClick={() => buttonClickMethod(name)} type="button">{name}</button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonClickMethod: PropTypes.func.isRequired,
};

export default Button;
