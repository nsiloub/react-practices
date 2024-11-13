// Challenge 2 of 4: Fix a component failing to re-render  --- referencing-values-with-refs

/*
    In this challenge, the problem was that we're trying to 
    use the useRef to show the button On/Off during the [re]render,
    this won't work because the useRef doesn't trigger a re-render,
    and only the original value (not to say state) will be shown
*/


import { useRef, useState } from "react"

export default function Toggle() {
    const isOnRef = useRef(false); // nothing against declaring it but,...

    // instead
    const [isOnState, setIsOnState] = useState(false);

    console.log("useRef's result is correctly: ", isOnRef.current);
    console.log("useState's result is corretly: ", isOnState)
    return (
        <button onClick={() => {
            
            isOnRef.current = !isOnRef.current; //...Bad for calculating the re-render, and...

            setIsOnState(!isOnState); // not so ok for calculation (only takes the current snapshoot (false) before the re-render)
        }}>
            {isOnRef ? "OnRef" :  "OffRef"}  {/*...bad for using useRef during render*/}
            {" "} | {" "}
            {isOnState ? "OnState" : "OffState"} {/*...but for rendering, useState is the way to go */}
        </button>
    )
}