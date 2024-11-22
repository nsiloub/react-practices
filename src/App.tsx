// Challenge 1 of 5: Fix reconnecting on every keystroke [*add dependency array] --- lifecycle-of-reactive-effects

// git add . && git commit -m "CLEARING: IGNORE IT" && git push

import { useEffect, useState } from "react";
import "./App.css";
import createConnection from "./helpers/chat";

const serverUrl = "https://localhost:1234";
type Room = "general" | "travel" | "music";

export default function App() {
    const [roomId, setRoom] = useState<Room>("general");

    return (
        <>
            <label>
                Choose the chat Room {' '}
                <select onChange={(e) => setRoom(e.target.value as Room)}>
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr />
            <ChatRoom roomId={roomId}/>
        </>
    )
};

function ChatRoom( {roomId} : {
    roomId: Room
}) {
    const [message, setMessage] = useState("");

    // don't do the following:
    /*
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();

        return () => connection.disconnect();
    })
    */

    // do this instead
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);

        connection.connect();

        return () => connection.disconnect();
    }, [roomId])


    return (
        <>
            <h1>Welcome to the {"<<"}<b>{roomId}</b>{">>"} roomId!</h1>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
        </>
    )
}