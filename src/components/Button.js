import PropTypes from 'prop-types';

const Button = ({ btnName, clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <button type="button" onClick={() => handleClick(btnName)}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Button;
