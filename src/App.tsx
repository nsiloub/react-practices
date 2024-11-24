// Challenge 1 of 4: Fix a variable that doesn’t update  --- separating-events-from-effects

import { useEffect, useState } from "react";
import "./App.css";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  // Effect for the counter, containing the reactive value "increment" effect
  useEffect(() => {
    const interval = 1000;
    const timerId = setInterval(() => {
      setCount(c => c + increment);
    }, interval);

    return () => {
      clearInterval(timerId)
    }


  }, [increment]); // "increment" must be included in the array because it's a reactive value not just an Effect-Event

  return (
    <>
      <h1 style={{ display: "inline" }}>
        Counter: {count}
      </h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment < 1}
          onClick={() => setIncrement(i => i - 1)}
        >-</button>
        {increment}
        <button
          onClick={() => setIncrement(i => i + 1)}
        >+</button>
      </p>
    </>
  )
}