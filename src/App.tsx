// Challenge 3 of 4: Fix debouncing

import { ReactNode, useRef, useState } from "react"

export default function Dashboard() {
    return (
        <>
            <DebouncedButton
                onBtnClick={() => alert("Spaceship launched!")}
            >
                Launch the spaceship
            </DebouncedButton>
            <br /><br />
            <DebouncedButton
                onBtnClick={() => alert("Soup boiled!")}
            >
                Boil the soup
            </DebouncedButton>
            <br /><br />
            <DebouncedButton
                onBtnClick={() => alert("Lullaby sung!")}
            >
                Sing a lullaby
            </DebouncedButton>
        </>
    )
};

// let timeoutId: number;

function DebouncedButton( {children, onBtnClick} : {
    children: ReactNode,
    onBtnClick: () => void
} ) {
    // const [timeoutIdState, setTimeoutIdState] = useState<number | undefined>();
    const timeoutIdRef = useRef<number | undefined>();

    return (
        <button onClick={() => {
            
            // clearTimeout(timeoutId); // bad (can't survive the re-render)
            // timeoutId =  setTimeout(() => {
            //     onBtnClick()
            // }, 1000);


            // clearTimeout(timeoutIdState); // fine (can survive re-render) but not ideal because this will not be rendered to the dom, only for "background activities"
            // setTimeoutIdState(setTimeout(() => {
            //     onBtnClick();
            // }, 1000));


            clearTimeout(timeoutIdRef.current); //  Great because survivies re-renders, and these calculations are not about things to be rendered, rather for things in the "background activities"
            timeoutIdRef.current = setTimeout(() => {
                onBtnClick();
            }, 1000);
        }}>
            {children}
        </button>
    )
}


/*

In this example, all button click handlers are “debounced”.
To see what this means, press one of the buttons. Notice how
the message appears a second later. If you press the button
while waiting for the message, the timer will reset. So if you
keep clicking the same button fast many times, the message won’t
appear until a second after you stop clicking. Debouncing lets you
delay some action until the user “stops doing things”.

This example works, but not quite as intended. The buttons are not
independent. To see the problem, click one of the buttons, and then
immediately click another button. You’d expect that after a delay, you
would see both button’s messages. But only the last button’s message shows up.
The first button’s message gets lost.

Why are the buttons interfering with each other? Find and fix the issue.

*/