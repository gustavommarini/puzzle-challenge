import React from 'react';
import PropTypes from 'prop-types';
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

Controls.propTypes = {
  startAction: PropTypes.func.isRequired,
  stopAction: PropTypes.func.isRequired,
  resetAction: PropTypes.func.isRequired,
};

export default Controls;
