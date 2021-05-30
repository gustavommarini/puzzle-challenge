import React from 'react';
import Button from './Button';

const Controls = props => {
  return (
    <div className="Controls">
      <Button click={props.startAction}>Start</Button>
      <Button click={props.stopAction}>Stop</Button>
      <Button click={props.resetAction}>Reset</Button>
    </div>
  );
};

export default Controls;
