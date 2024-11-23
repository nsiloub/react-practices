// [Challenging] Extracting non-reactive logic out of Effects [mixing reactive value with non reactive values without useEffectEvent] --- separating-events-from-effects --- separating-events-from-effects

import { useEffect, useState } from "react"
import createConnection from "./helpers/chat";
import { showNotification, Theme } from "./helpers/notification";

const serverUrl = "https://localhost:1234";

type Room = "travel" | "general" | "music";

export default function App() {
    const [roomId, setRoomId] = useState<Room>("travel");
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <label>
                Choose the chat room: {" "}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value as Room)}
                >
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                    <option value="general">general</option>
                </select>
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={(e) => setIsDark(e.target.checked)}
                />
                Use dark theme
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
    roomId: string,
    theme: Theme
}) {
    
    // effect for connecting whenever the roomId changes
    // But the problem is, the "theme" also(unvolontarly) triggers connection
    // "theme" is a reactive value (just like roomId) but at the same time an Event value
    // so this code is not quite right
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on("connected", () => {
            showNotification("connected!", theme)
        });
        connection.connect();

        return () => connection.disconnect();
    }, [roomId, theme]);

    return <h1> Welcome to the "{roomId}" room! </h1> 
}