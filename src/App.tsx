// Challenge 1 of 4: Fix a broken chat input --- referencing-values-with-refs

/*
    in this challenge, i have to cancel the sending of alert() message after
    the message has been sent. so each methods has different behaviours
*/

import { useRef, useState } from "react"

export default function Chat() {
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    

    // const [timeoutIdState, setTimeoutIdState] = useState<number | undefined>(undefined); // survives the re-render, but make un-necessary re-render for each change, there only use for rendering (return) elements,..
    
    // let timeoutId: number | undefined = undefined; // regular variable: doesn't survive the re-render

    // best solution for this case
    const timeoutIdRef = useRef<number | undefined>(undefined); // survives the rerender,...

    

    function handleSend() {
        setIsSending(true);


        // timeoutId = setTimeout(() =>{
        //     alert("Sent");
        //     setIsSending(false)
        // }, 3000);

        
        // setTimeoutIdState(setTimeout(() => {
            //     alert("Sent");
            //     setIsSending(false);
            // }, 3000));
            
            
        timeoutIdRef.current = setTimeout(() => {
            alert("Sent");
            setIsSending(false);
        }, 3000 );
    }

    function handleUndo() {
        setIsSending(false);

        // clearTimeout(timeoutId); // can't clear the timeout because doesn't survive the re-render

        // clearTimeout(timeoutIdState); // re-renders un-necessarly the component for each timeout clearing, and this part is not a render (return part), so avoid this
        
        // best solution for this case:
        clearTimeout(timeoutIdRef.current); // can clear the timeout cause can survive after the re-render
    }

    return (
        <>
            <input
                type="text"
                disabled={isSending}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                disabled={isSending}
                onClick={handleSend}
            >
                {isSending ?  "Sending..." : "Send"}
            </button>
            {isSending && 
                <button onClick={handleUndo}>
                    Undo
                </button>
            }
        </>
    )
};