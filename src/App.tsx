//Choosing the State Structure -- Avoid contradictions in state"

import { useState } from "react";
import "./App.css";

type Status = "typing" | "isSending" | "sent";

export default function FeedBackForm()  {
    // !instead of doing this:
    /*
        const [text, setText] = useState('');
        const [isSending, setIsSending] = useState(false);
        const [isSent, setIsSent] = useState(false);
    */

    //todo: DO THIS
    
    const [text, setText] = useState("");
    const [status, setStatus] = useState<Status>("typing");

    const isSending = status === "isSending";
    const isSent = status === "sent";

    if(isSent) {
        return <p>Thanks For the Feedback!</p>
    };

    async function handleSubmit(e: React.MouseEvent<HTMLFormElement> ): Promise<void> {
        e.preventDefault();

        setStatus("isSending");
        await sendMessage(text);
        setStatus("sent")

    };

    return (
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony ?</p>
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                disabled = {isSending}
            />
            <br />
            <button
                type="submit"
                disabled = {status !== "typing" || text.length < 1}
            >Send</button>
            {status === "isSending" && <p>Sending...</p>}
        </form>
    )
};

function sendMessage(text: string): Promise<string> {
    console.log(text);
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};