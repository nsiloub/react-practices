// Challenge 1 of 4: Focus a field on mount --- synchronizing-with-effects

import { useState } from "react";
import "./App.css";
import MyInput from "./components/MyInput";

export default function Form() {
    const [show, setShow] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [name, setName] = useState("Taylor");
    
    return (
        <>
            <button onClick={() => {
                setShow(s => !s);
            }}>{show ? "Hide ": "Show "} form</button>
            <br />
            <hr />
            {show && (
                <>
                    <label>
                        Enter your name: 
                        <MyInput name={name} onNameChanges={setName}/>
                    </label>
                    <label>
                        <input
                            type= "checkbox"
                            checked={upperCase}
                            onChange={(e) => {
                                setUpperCase(e.target.checked);
                            }}
                        />
                        Make it upperCase
                    </label>
                    <p>Hello, <b>{upperCase ? name.toUpperCase() : name}</b></p>
                </>
            )}
        </>
    )
}