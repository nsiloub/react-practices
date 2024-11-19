// Challenge 3 of 4: Fix an interval that fires twice --- synchronizing-with-effects

import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function Form() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}> {show ? "Hide" :  "Show"} Counter </button>
            <br />
            <hr />
            { show && <Counter />}
        </>
    )
}