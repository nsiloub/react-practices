// [Solution] Extracting non-reactive logic out of Effects [mixing reactive value with non reactive values using useEffectEvent experimental hook] --- separating-events-from-effects --- separating-events-from-effects

/// <reference types="react/experimental" />
import { useEffect, useState } from "react"
import { experimental_useEffectEvent as useEffectEvent } from "react"
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

function ChatRoom({ roomId, theme }: {
    roomId: string, theme: Theme
}) {
    // "theme" is an Effect-Event: an event that behaves like an effect
    // so use the "useEffectEvent" experimental hook
    const onConnected = useEffectEvent(() => {
        showNotification("connected!", theme)
    });

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on("connected", () => {
            onConnected();
        });
        connection.connect();

        return () => connection.disconnect();

    }, [roomId]);


    return <h1>Welcome to the {roomId} romm!</h1>
}