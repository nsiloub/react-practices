// Challenge 2 of 4: Fix a retriggering animation [avoid unintentional re-renders with useEffectEvent] ---- removing-effect-dependencies

/// <reference types="react/experimental"/>
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { FadeInAnimation } from "./helpers/animation";

export default function App() {
    const [duration, setDuration] = useState(1000);
    const [showImage, setShowImage] = useState(false);
    return (
        <>
            <label>
                <input
                    type="range"
                    min={"100"}
                    max={"3000"}
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                />
                <br />
                Fade in duration: {duration}ms
            </label>
            <button onClick={() => setShowImage(!showImage)}>
                {showImage ? "Remove" : "Show"}
            </button>
            <hr />
            {showImage && <Welcome duration={duration} />}
        </>
    )
};

function Welcome({ duration }: { duration: number }) {
    const h1WelcomeRef = useRef<HTMLHeadingElement>(null);

    // for avoiding unintentional re-renders on useEffect caused by "duration" prop. See README.md for more
    const onDurationUpdate = useEffectEvent((animation: FadeInAnimation) => {
        animation.start(duration)
    });

    //  Effect for calling a new animation. See README.md for more
    useEffect(() => {
        let animation: FadeInAnimation;
        if (h1WelcomeRef.current) {
            animation = new FadeInAnimation(h1WelcomeRef.current)
            onDurationUpdate(animation)
        }

        return () => {
            animation.stop();
        }
    }, []); // now there is no unnecessary re-renders. See README.md for more

    return (
        <h1
            ref={h1WelcomeRef}
            style={{
                opacity: 0,
                color: "white",
                padding: 50,
                textAlign: "center",
                fontSize: 50,
                backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
            }}
        >Welcome</h1>
    )
}