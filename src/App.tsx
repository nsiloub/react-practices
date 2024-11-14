// Example: Focusing a text input ---  manipulating-the-dom-with-refs

import { useRef } from "react";
import "./App.css";

export default function Form() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}