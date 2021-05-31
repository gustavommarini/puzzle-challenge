import React from 'react';
import PropTypes from 'prop-types';

const LoadSquare = props => {
  const classes = `Square${props.active ? ' active' : ''}`;
  return <div className={classes}></div>;
};

LoadSquare.propTypes = {
  active: PropTypes.bool,
};

export default LoadSquare;
