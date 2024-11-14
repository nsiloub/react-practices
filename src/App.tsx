// Example 2: Scrolling to an element --- manipulating-the-dom-with-refs
//  Multiple useRefs

import { useRef } from "react";
import "./App.css";

export default function CatFriends() {

    const catRefs : React.RefObject<HTMLImageElement>[] = [
        useRef(null), useRef(null), useRef(null)
    ]

    // handle everything event with one handler
    function handleScrollToImage(index: number) {
        catRefs[index].current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }

    return (
        <>
            <nav>
                <button
                    onClick={() =>handleScrollToImage(0)}
                >
                    Neo
                </button>
                <button
                    onClick={() =>handleScrollToImage(1)}
                >
                    Millie
                </button>
                <button
                    onClick={() =>handleScrollToImage(2)}
                >
                    Bella
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                            ref={catRefs[0]}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/millie/200/200"
                            alt="Millie"
                            ref={catRefs[1]}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/bella/199/200"
                            alt="Bella"
                            ref={catRefs[2]}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}
