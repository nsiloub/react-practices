// Example 1: Bad practice - side effects on DOM during render [without using useEffect] --- synchronizing-with-effects

import { useRef, useState } from "react";
import "./App.css";
import {VideoPlayer }from "./components/VideoPlayer";

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const vidElmRef = useRef<HTMLVideoElement>(null);

    // this is manipulating the DOM with side effects (play/pause) during rendering [BAD PRACTICE]
    if(isPlaying) {
        vidElmRef.current?.play(); // this side effect during rendering is BAD PRACTICE
    } else {
        vidElmRef.current?.pause(); // this side effect during rendering is BAD PRACTICE
    }

    return (
        <>
            <button onClick={() => {
                setIsPlaying(!isPlaying);
            }}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <VideoPlayer
                ref={vidElmRef}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    )
};
