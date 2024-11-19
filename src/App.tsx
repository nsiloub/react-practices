// Challenge 2 of 4: Focus a field conditionally [chained .focus() methods ] --- synchronizing-with-effects

import { useState } from "react";
import "./App.css";
import MyInput from "./components/MyInput";

export default function Form() {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState("Taylor");
    const [lastName, setLastName] = useState("Swift");

    return (
        <>
            <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} Form</button>
            <br />
            <hr />
            {show && (
                <>
                    <label>
                        Enter your first name:{" "}
                        <MyInput
                            value={firstName}
                            onTextChanges={setFirstName}
                            shouldFocus={true}
                        />
                    </label>                
                    <label>
                        Enter your last name:{" "}
                        <MyInput
                            value={lastName}
                            onTextChanges={setLastName}
                            shouldFocus={false}
                        />
                    </label>                
                </>
            )}
        </>
    )
}