import { useEffect, useRef, useState, VideoHTMLAttributes } from "react"

type MyVideoPlayerProps = VideoHTMLAttributes<HTMLVideoElement> & {
    src: string,
    isPlaying: boolean
}

export default function VideoPlayer(props: MyVideoPlayerProps) {
    const {isPlaying} = props;
    const videElmRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(isPlaying) { // isPlaying can be either true/false, so must be declared, if any depedency array specified
            console.log("calling video.play()");
            videElmRef.current?.play();
        } else {
            console.log("calling video.pause()");
            videElmRef.current?.pause();
        }
    }, [isPlaying]) // isPlaying must be declared here
    // vidElmRef can be ommited from dependency array because the linter see it has a "stable" value (that won't change, and isn't passed from parent componenet)



    return (
        <video
            ref={videElmRef}
            {...props}
        />
    )
}