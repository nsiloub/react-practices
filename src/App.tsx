// Challenge 1 of 4: Fix a resetting interval [use an updater function to avoid unnecessary re-renders/cleanup from useEffect dependency array] ---- removing-effect-dependencies

import { useEffect, useState } from "react";
import "./App.css";

export default function Timer() {
    const [count, setCount] = useState(0);

    // Effect that updates the counter, and show the logs
    useEffect(() => {
        const delay = 1000;

        console.log("✅ Creating an interval");
        const timerId = setInterval(() => {
            console.log("⏰ Interval tick");
            // setCount(count + 1);  //avoid using the "count" state. See the README.md for more

            setCount(prevCount => prevCount + 1) // updater function inside setCount, to avoid unnecessary "count" dependency. See README.md for more

        }, delay);

        return () => {
            console.log("❌ Clearing an interval");
            clearInterval(timerId);
        }
    }, []); // "count" state not required as a dependency now. See README.md for more

    return (
        <h1>Counter: {count}</h1>
    )
}