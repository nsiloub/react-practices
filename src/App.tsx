// Example 2: Good practice - side effects on DOM using the useEffect with dependency array --- synchronizing-with-effects

import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState("");

    return (
        <>
            <input
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button onClick={() => {
                setIsPlaying(!isPlaying);
            }}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <VideoPlayer
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                isPlaying={isPlaying}
            />
        </>
    )
};
