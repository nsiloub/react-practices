// Challenge 2 of 4: Fix a freezing counter [separate a non-reactive Effect (Effect-Event) into useEffectEvent hook ] --- separating-events-from-effects
// see the README.md

// The following commented "///" is for importing the experimental...
/// <reference types="react/experimental" /> 
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { useEffect, useState } from "react";
import "./App.css";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onIncrement = useEffectEvent(() => {
    setCount(c => c + increment); // "increment" is like an event that occurs only when user clicks the "+/-" button. so it's an Effect-Event. See README.md for more
  });

  // Effect for using the non-reactive Effect "increment"
  useEffect(() => {
    const interval = 1000;
    const timerId = setInterval(() => {
      onIncrement()
    }, interval);

    return () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
      </h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr />
      <p>
        Every second, increment by:
        <button
          onClick={() => setIncrement(i => i - 1)}
          disabled={increment < 1}
        >-</button>
        {increment}
        <button
          onClick={() => setIncrement(i => i + 1)}
        >+</button>

      </p>
    </>
  )
}