// Challenge 1 of 4: Play and pause the video  --- manipulating-the-dom-with-refs

import "./App.css";
import { useRef, useState } from "react"

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const vidRef = useRef<HTMLVideoElement>(null);


    if(isPlaying) {
        vidRef.current?.play()
    } else {
        vidRef.current?.pause();
    }
    
    return (
        <>
            <button onClick={() => {
                setIsPlaying(!isPlaying)
            }}>
                {isPlaying ? "Stop" : "Play"}
            </button>
            <video
                width={250}
                ref={vidRef}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}