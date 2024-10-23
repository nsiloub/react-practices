import { Letter } from "../assets/data"

export default function LetterComponent({letter, isSelected, onToggle} : {
    letter: Letter,
    isSelected: boolean,
    onToggle: (letterId: Letter["id"]) => void
}) {
    return (
        <li className={isSelected ? "highlighted" : ""}>
            <label >
                <input
                    type="checkbox"
                    checked= {isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {" "}
                <span> {letter.subject} </span>
            </label> 
        </li>
    )
}