import React, { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const timerDiff = useRef();

  const [count, setCount] = useState(0);

  const startTimer = () => {
    timerDiff.current = setInterval(() => setCount((c) => c + 1), 1000);
  };
  useEffect(() => {
    return () => clearInterval(timerDiff.current);
  }, []);

  const endTimer = () => {
    clearInterval(timerDiff.current);
    timerDiff.current = 0;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <button onClick={startTimer}>Start</button>
      <h1>{count}</h1>
      <button onClick={endTimer}>End</button>
    </div>
  );
};
