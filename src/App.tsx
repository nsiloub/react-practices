import React, { useState } from "react";
import "./App.css";
type ReactJsxElm = React.JSX.Element;

export default function Form(): ReactJsxElm {
    const [answer, setAnswer] = useState("");
    const []
    return (
        <>
            <h1>City quiz</h1>
            <p>
                In which city is there a billboard that can turn air into drinkable water?
            </p>
            <form>
                <textarea
                    required
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <br />
            <button>Submit</button>
            </form>
        </>
    )
}; 