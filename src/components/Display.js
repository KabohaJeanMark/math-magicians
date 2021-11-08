import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ result }) => (
  <div className="Display">
    <p>
      {result || '0'}
    </p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
