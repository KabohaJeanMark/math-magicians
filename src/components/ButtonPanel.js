import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => (
  <div className="ButtonPanel">
    <div>
      <Button buttonClickMethod={clickHandler} name="AC" />
      <Button buttonClickMethod={clickHandler} name="+/-" />
      <Button buttonClickMethod={clickHandler} name="%" />
      <Button buttonClickMethod={clickHandler} name="÷" />
    </div>
    <div>
      <Button buttonClickMethod={clickHandler} name="7" />
      <Button buttonClickMethod={clickHandler} name="8" />
      <Button buttonClickMethod={clickHandler} name="9" />
      <Button buttonClickMethod={clickHandler} name="X" />
    </div>
    <div>
      <Button buttonClickMethod={clickHandler} name="4" />
      <Button buttonClickMethod={clickHandler} name="5" />
      <Button buttonClickMethod={clickHandler} name="6" />
      <Button buttonClickMethod={clickHandler} name="-" />
    </div>
    <div>
      <Button buttonClickMethod={clickHandler} name="1" />
      <Button buttonClickMethod={clickHandler} name="2" />
      <Button buttonClickMethod={clickHandler} name="3" />
      <Button buttonClickMethod={clickHandler} name="+" />
    </div>
    <div>
      <Button buttonClickMethod={clickHandler} name="0" />
      <Button buttonClickMethod={clickHandler} name="." />
      <Button buttonClickMethod={clickHandler} name="=" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
