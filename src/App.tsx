// Challenge 2 of 5: Switch synchronization on and off [use conditions inside function within useEffect] --- lifecycle-of-reactive-effects

// git add . && git commit -m "CLEARING: IGNORE IT" && git push

import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
    const [canMove, setCanMove] = useState(true);
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {

        function handleMove(e: PointerEvent) {
            if(canMove) { //use this condition
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }
        };
        
        window.addEventListener("pointermove", handleMove);
        return () => window.removeEventListener("pointermove", handleMove);
    }, [canMove])

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={canMove}
                    onChange={(e) => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />
            <div style={{
                position: "absolute",
                backgroundColor: "pink",
                borderRadius: "50%",
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: "none",
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}/>
        </>
    )
}