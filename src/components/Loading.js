import React from 'react';
import PropTypes from 'prop-types';
import LoadSquare from './LoadSquare';

const Loading = props => {
  const generateSquares = () => {
    return Array.from({ length: props.squareAmount }, (_, i) => (
      <LoadSquare key={i} active={props.step > i} />
    ));
  };
  return <div className="Loading">{generateSquares()}</div>;
};

Loading.defaultProps = {
  squareAmount: 15,
};

Loading.propTypes = {
  squareAmount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Loading;
