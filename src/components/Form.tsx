export default function Form({
    status
} : {
    status: "empty" | "typing" | "submiting" | "success" | "error"
}): React.JSX.Element {
    if(status === "success") {
        return <h1 style={{color: "greenyellow"}}>That's Right!</h1>
    }

    return (
        <>
            <form action="">
                <textarea 
                    name=""
                    id="" 
                    disabled = {status === "submiting"}
                />
                <br />
                <button disabled = {
                    status === "empty" ||
                    status === "submiting"
                }
                >
                    Submit
                </button>
                {status === "error" && 
                    <p style={{color: "red"}}>
                        Good Guess but wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    )
}