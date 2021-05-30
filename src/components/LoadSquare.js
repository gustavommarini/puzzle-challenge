import React from 'react';

const LoadSquare = props => {
  const classes = `Square${props.active ? ' active' : ''}`;
  return <div className={classes}></div>;
};

export default LoadSquare;
