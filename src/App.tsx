// Challenge 2 of 4: Focus the search field ([toggle focus/blur input]:Me) ---- manipulating-the-dom-with-refs

// [toggle focus/blur input]

import { useRef, useState } from "react";
import "./App.css";

export default function Page() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    if(isFocused) {
        inputRef.current?.focus();
    } else {
        inputRef.current?.blur();
    }

    return (
        <>
            <nav>
                <button onClick={() => {
                    setIsFocused(!isFocused)
                }}>Search</button>
            </nav>

            <input
                ref={inputRef}
                type="text"
                placeholder="Looking for something"
            />
        </>
    )
}