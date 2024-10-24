// Challenge 1 of 2: Synced inputs -- sharing-state-between-components

import { useState } from "react";
import "./App.css";

export default function SyncedInputs() {
    const [text, setText] = useState("");

    function handleTextChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    return (
        <>
            <Input
                inputTitle="First Input"
                text={text}
                onTextChange={handleTextChange}                
            />
            <br /><br />
            <Input
                inputTitle="Second Input"
                text={text}
                onTextChange={handleTextChange}                
            />
        </>
    )
};

function Input({inputTitle, text, onTextChange} : {
    inputTitle: string, text: string, onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>void
}) {
    return (
        <>
            <label>
                {inputTitle}
                {" "}
                <input
                    type="text"
                    value={text}
                    onChange={e => onTextChange(e)}
                />
            </label>
        </>
    )
};