// Challenge 3 of 4: Fix a non - adjustable delay [useEffectEvent example 2] --- separating-events-from-effects

/// <reference types="react/experimental" /> 
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { useEffect, useState } from "react";
import "./App.css";

export default function Timer() {
    const [counter, setCounter] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [delay, setDelay] = useState(100);

    // Effect-Event that updates the counter's incrementing factor
    const onUpdateIncrementFactor = useEffectEvent(() => {
        setCounter(c => c + increment);
    });



    // Effect for using the incremented counter factor, with the updated delay
    useEffect(() => {
        const timerId = setInterval(() => {
            onUpdateIncrementFactor()
        }, delay);

        return () => {
            clearInterval(timerId);
        }
    }, [delay]);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(0)}>Reset</button>
            <hr />
            <p>
                Increment by:
                <button
                    disabled={increment < 1}
                    onClick={() => setIncrement(i => i - 1)}
                >-</button>
                {increment}
                <button
                    onClick={() => setIncrement(i => i + 1)}
                >+</button>
            </p>
            <p>
                Increment delay:
                <button
                    disabled={delay <= 100}
                    onClick={() => setDelay(d => d - 100)}
                >-1OOms</button>
                {delay}
                <button
                    onClick={() => setDelay(d => d + 100)}
                >+1OOms</button>
            </p>
        </>
    )
}
