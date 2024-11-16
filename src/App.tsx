// Example of bad practice DOM manipulation with refs [AVOID THIS] ---  manipulating-the-dom-with-refs
import { useRef, useState } from "react"

export default function Counter() {
    const [show, setShow] = useState(true);
    const pRef = useRef<HTMLParagraphElement>(null);

    return (
        <div>
            <button onClick={() => {
                setShow(!show);
            }}>
                Toggle with setState
            </button>
            <button onClick={() => {
                pRef.current?.remove(); // Removes the referenced node from DOM, without React noticing, and will cause crashes 
            }}>
                Remove from the DOM
            </button>
            { show && <p ref={pRef}>Hello world</p>}
        </div>
    )
};