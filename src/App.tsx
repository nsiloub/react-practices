//Reacting to input with state 

import React, { useState } from "react";
import "./App.css";
type ReactJsxElm = React.JSX.Element;


function submitForum(answer: string): Promise<void> {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const shouldError = answer.toLocaleLowerCase() !== "lima";

            if(shouldError) {
                reject(new Error("Good guess but wrong answer. Try again!"));
            } else {
                resolve();
            }
        }, 1500)
    });
};

export default function Form(): ReactJsxElm {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState<null | Error>(null);
    const [status, setStatus] = useState<"success" | "submitting" | "typing" >("typing");


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForum(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err as Error);
        }
    };

    if(status === "success") {
        return (<h1>That's right!</h1>)
    };

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that can turn air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    required
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <br />
                <button
                    disabled = {
                        answer.length === 0 ||
                        status === "submitting"
                    }
                >Submit</button>
                { error !== null &&
                    <p className="Error" >
                        {error.message}
                     </p>
                }
            </form>
        </>
    )
}; 