import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <p>
        Display Result.
        {result}
      </p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
