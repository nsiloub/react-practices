// Challenge 4 of 4: Focus the search field with separate components ([using forwardRef]: BY-ME)  --- manipulating-the-dom-with-refs

import { useRef, useState } from "react";
import "./App.css";
import SearchButton from "./components/SearchButton";
import { SearchInput } from "./components/SearchInput";

export default function Page() {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    if(isFocused) {
        inputRef.current?.focus()
    } else {
        inputRef.current?.blur()
    }

    return (
        <>
            <nav>
                <SearchButton
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                />

                <SearchInput ref={inputRef}/>               
            </nav>
        </>
    )
}