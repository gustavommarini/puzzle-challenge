import React, { useState } from 'react';
import Controls from './components/Controls';
import Loading from './components/Loading';
import useInterval from './hooks/useInterval';

const delay = 500;
const maxSquares = 15;

function App() {
  const [steps, setSteps] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      if (steps >= maxSquares) {
        setIsRunning(false);
      }
      setSteps(steps + 1);
    },
    isRunning ? delay : null
  );

  function handleStart() {
    if (steps >= maxSquares) {
      return;
    }
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset(e) {
    setSteps(0);
  }

  return (
    <div className="App">
      <Loading step={steps} squareAmount={maxSquares} />
      <Controls
        startAction={handleStart}
        stopAction={handleStop}
        resetAction={handleReset}
      />
    </div>
  );
}

export default App;
