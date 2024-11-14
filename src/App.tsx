// Challenge 4 of 4: Read the latest state  ---- referencing-values-with-refs

import { useRef, useState } from "react";

/*
In this example, after you press “Send”, there is
a small delay before the message is shown.
Type “hello”, press Send, and then quickly edit
the input again. Despite your edits, the alert
would still show “hello” (which was the value of
state at the time the button was clicked).

Usually, this behavior is what you want in an app.
However, there may be occasional cases where you
want some asynchronous code to read the latest
version of some state.
Can you think of a way to
make the alert show the current input text rather
than what it was at the time of the click?

*/


export default function Chat(){
    const [text, setText] = useState("");

    const textRef = useRef<string>(text);

    function handleSend() {

        // setTimeout(() => {  // state can't use the latest [asychronuous] value, it's like a snapshoot. instead,...
        //     alert(`Sending ${text}`);
        // }, 3000);

        setTimeout(() => { // useRef can use the latest value, but can't trigger a re-render. So, you have to...
            alert(`Sending ${textRef.current}`);
        }, 3000);

    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        //... make the useRef in the same handler as the state setter, to "hijack" the re-render
        setText(e.target.value);
        textRef.current = e.target.value; // re-renders by "hijacking the state"
    }

    return (
        <>
            <input
                type="text"
                value={text}
                onChange={(e) => handleChange(e)}
            />
            <button onClick={handleSend}>
                Send
            </button>
        </>
    )
}; 