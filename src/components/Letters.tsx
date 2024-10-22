import { useState } from "react";
import { Letter } from "../assets/data";

export default function LetterComponent({letter, onToggle} : {
    letter: Letter, onToggle: (letterId: Letter["id"]) => void
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <li
                onMouseEnter={() => {
                    console.log("you hovered");
                    setIsHovered(true);
                }}

                onMouseLeave={() => {
                    setIsHovered(false)
                }}

                className={isHovered ? "highlighted" : ""}
            >
                <button onClick={() => {
                    onToggle(letter.id);
                }}>{letter.isStarred ? "Unstar" : "Star"}</button>
                {" "}
                <span >{ letter.subject }</span>
            </li>
        </>
    )
};