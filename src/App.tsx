import { useState } from "react"

type Status = "typing" | "submitting" | "success";

export default function Form() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<Status>("typing");

    if(status === "success") {
        return <h1>That's right!</h1>
    }


    function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        setAnswer(e.target.value)
    };

    async function handleSubmit(e: React.MouseEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err: unknown) {
            setStatus("typing");
            setError(err as Error);
        }
    };

    return (
        <>
            <h2>City Quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkeable water ?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextAreaChange}
                    disabled = {status === "submitting"}
                />
                <button disabled= {
                    answer.length < 1 ||
                    status === "submitting"
                }>
                    Submit
                </button>
                {error !== null && 
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    )
};

function submitForm(answer: string): Promise< void | Error> {
    return new Promise((resolve, reject) =>{
        const shouldEroor = answer.toLocaleLowerCase() !== "lima";

        if(shouldEroor) {
            reject(new Error("Good guess but wrong answer. Try Again"))
        } else {
            resolve();
        }
    })
};