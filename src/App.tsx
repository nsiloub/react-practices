// Example 3: UseEffect with cleanup function --- synchronizing-with-effects

import { useEffect } from "react";
import "./App.css";
import createConnection from "./helpers/chat";

export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        return () => { // this is the cleanup function, for "cleaning" up the side effect caused by the useEffec
            connection.disconnect();
        }
    }, [])
    return (
        <>
            <h1>Welcome to the chat!</h1>
        </>
    )
};