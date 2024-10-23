// Challenge 4 of 4: Implement multiple selection  --- choosing-the-state-structure

import { useState } from "react"
import "./App.css"
import { Letter, letters } from "./assets/data";
import LetterComponent from "./components/Letter";

export default function MailClient() {
    const [selectedLettersIds, setSelectedLettersIds] = useState<Array<Letter["id"]>>([]);
    const totalSelected = selectedLettersIds.length;

    function handleToggle(letterId: Letter["id"]): void {
        const isAlreadySelected: boolean = selectedLettersIds.includes(letterId);
        
        let nextSelectedList: typeof selectedLettersIds = [...selectedLettersIds]
        if(isAlreadySelected) {
            nextSelectedList = selectedLettersIds.filter((selectedId) => selectedId !== letterId);
        } else {
            nextSelectedList = [
                ...selectedLettersIds,
                letterId
            ]
        }

        setSelectedLettersIds(nextSelectedList);
    };

    return (
        <>
            <h2>Inbox</h2>

            <ul>
                {letters.map((letter) =>(
                    <LetterComponent
                        key={letter.id}
                        letter={letter}
                        isSelected={selectedLettersIds.includes(letter.id)}
                        onToggle = {handleToggle}
                    />
                ))}
            </ul>
            <hr />
            <b>You selected {totalSelected} Letters </b>
        </>
    )
};