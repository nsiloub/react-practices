// Challenge 3 of 4: Scrolling an image carousel [use the flushSync ] --- manipulating-the-dom-with-refs

// [flushSync]: without this, the scrolled image won't be the last (updated/real) one
// instead the before(current before render state)  image. So flushSync enforces the latest state

import { useRef, useState } from "react";
import "./App.css";
import { flushSync } from "react-dom";

export default function CatFriends() {
    const [index, setIndex] = useState(0);

    const itemRef = useRef<HTMLLIElement>(null);

    const nextIndex = index + 1 < catList.length - 1 ? index + 1 : 0;

    function handleClick() {
        
        flushSync(() => { // flushSync: to enforce React to return the (updated) state, rather than the natural behavior of the current(or previous) state, and be in sync
            setIndex(nextIndex);
        })

        itemRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }

    return (
        <>
            <nav>
                <button onClick={handleClick}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) =>(
                        <li
                            key={cat.id}
                            ref={index === i ? itemRef : null}
                        >
                            <img
                                className={index === i ? "active" : ""}
                                src={cat.imageUrl}
                                alt={`Cat #${cat.id}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

const catList: {id: number, imageUrl: string}[] = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: `https://loremflickr.com/250/200/cat?lock=${i}`
    })
}