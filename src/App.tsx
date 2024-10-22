// Challenge 3 of 4 : Fix the disappearing selection -- choosing-the-state-structure

import { useState } from "react";
import "./App.css"
import { initialLetters, Letter } from "./assets/data";
import LetterComponent from "./components/Letters";
export default function MailClient() {
    const [letters, setLetters] = useState<Letter[]>( initialLetters );

    function handleToggleClick(letterId: Letter["id"]): void {
        const nextLetters: Letter[] = [...letters].map((letter) => {
            if(letter.id === letterId) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                }
            } else {
                return letter;
            }
        });

        setLetters(nextLetters);
    };

    return (
        <>
            <ul>
                {letters.map((letter) => (
                    <LetterComponent
                        key={letter.id}
                        letter={letter}
                        onToggle={handleToggleClick}
                    />
                ))}
            </ul>
            <h2>Inbox</h2>
        </>
    )
};