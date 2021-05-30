import React from 'react';
import LoadSquare from './LoadSquare';

const Loading = props => {
  const generateSquares = () => {
    return Array.from({ length: props.squareAmount }, (_, i) => (
      <LoadSquare key={i} active={props.step > i} />
    ));
  };
  return <div className="Loading">{generateSquares()}</div>;
};

export default Loading;
