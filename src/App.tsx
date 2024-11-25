// Challenge 4 of 4: Fix a delayed notification [use the changing state as a parameter insied Effect-Event function] --- separating-events-from-effects

/// <reference types="react/experimental" />
import { experimental_useEffectEvent as useEffectEvent } from "react";

import { useEffect, useState } from "react";
import "./App.css";
import { createConnection, RoomId } from "./helpers/chat";
import { Theme } from "./helpers/notification";
import showNotifications from "./helpers/notification"

const serverUrl = 'https://localhost:1234';

export default function App() {
    const [roomId, setRoomId] = useState<RoomId>("general");
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <label>
                Choose the chat room: {' '}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value as RoomId)}
                >
                    <option value={"general"}>general</option>
                    <option value={"travel"}>travel</option>
                    <option value={"music"}>music</option>
                </select>
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={(e) => setIsDark(e.target.checked)}
                />
                Use Dark theme
            </label>
            <hr />
            <ChatRoom
                roomId={roomId}
                theme={isDark ? "dark" : "light"}
            />
        </>
    )
};

function ChatRoom( {roomId, theme} : {
    roomId: RoomId, theme: Theme
} ) {

    const onConnected = useEffectEvent((connectedRoomId: RoomId) => { // the changing "connectedRoomId" parameter
        showNotifications(`Welcome to the ${connectedRoomId}`, theme);
    });

    
    

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on("connected", () => {
            setTimeout(() => {
                onConnected(roomId)
            }, 2000)
        });
        
        connection.connect()

        return () => {
            connection.disconnect();
        }
    }, [roomId]);

    return (
        <h1>Welcome to the {roomId} room!</h1>
    )
}


