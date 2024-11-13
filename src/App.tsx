import "./App.css";
import { useRef, useState } from "react"

export default function StopWatch() {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const intervalRef = useRef< numer | null >(null); // like the timer: will not be used for rendering, so we'll use useRef instead of useState


    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10)
    };

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0; // this will be 

    if(startTime !== null && now !== null) { // i.e. if the timer is started
        secondsPassed = (now - startTime) / 1000;
    }
    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            {" "}
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    )
}