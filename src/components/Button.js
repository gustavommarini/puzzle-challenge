import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return <button onClick={props.click}>{props.children}</button>;
};

Button.propTypes = {
  click: PropTypes.func,
};

export default Button;
