// Example 4: useEffect cleanup function behaviors/behaviours - use setTimeout to schedule a console log  ---- synchronizing-with-effects
// try playing with console.log to see the behaviour 

import { useEffect, useState } from "react";
import "./App.css";

function Playground() {
    const [text, setText] = useState("a");

    useEffect(() => {
        function onTimeout() {
            console.log(`⏰ ${text}`);
        };

        console.log(`🔵 Schedule ${text} log`);
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log(`🟡 Cancel ${text} log`);
            clearTimeout(timeoutId);
        }
    }, [text])

    return (
        <>
            <label>
                What to log:{" "}
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <h1> {text} </h1>
            </label>
        </>
    )    
}

export default function App() {
    const [show, setShow] = useState(false);


    return (
        <>
            <button onClick={() => {
                setShow(!show)
            }}>
                {show ? "Unmount" : "Mount"}
            </button>
            {show && <hr />}
            {show && <Playground />}
        </>
    )
}