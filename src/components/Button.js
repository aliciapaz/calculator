import PropTypes from 'prop-types';

const Button = ({ btnName }) => <button type="button">{btnName}</button>;

Button.propTypes = { btnName: PropTypes.string.isRequired };

export default Button;
