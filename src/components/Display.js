import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div>
    <p>
      {result}
    </p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
