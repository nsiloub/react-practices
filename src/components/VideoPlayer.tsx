import { forwardRef, VideoHTMLAttributes } from "react";

type MyVideoPlayerProps = VideoHTMLAttributes<HTMLVideoElement> & {
    src: string,
}

export const VideoPlayer = forwardRef<HTMLVideoElement, MyVideoPlayerProps>((props, vidElmRef) => {

    return (
        <video
            {...props}
            ref={vidElmRef}
            loop
            playsInline  
        />
    )
});