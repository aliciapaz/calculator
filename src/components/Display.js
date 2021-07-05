import PropTypes from 'prop-types';

const Display = ({ result }) => <div>{result}</div>;

Display.propTypes = { result: PropTypes.number };

Display.defaultProps = { result: 0 };

export default Display;
