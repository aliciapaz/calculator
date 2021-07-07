import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnName } = props;
  const handleClick = (btnName) => props.clickHandler(btnName);

  return (
    <button type="button" onClick={handleClick(btnName)}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Button;
