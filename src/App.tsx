// Challenge 3 of 4: Fix a reconnecting chat [remove object/function as dependency and destructure/declare variables] --- removing-effect-dependencies

import { useState } from "react";
import "./App.css";
import { RoomId } from "./helpers/chat";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState<RoomId>("general");
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        Choose the chat room:{" "}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value as RoomId)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
    </div>
  );
}
