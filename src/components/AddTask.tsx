import { useState } from "react"

export default function AddTask({onAdd} : {
    onAdd: (text: string) => void
}) {
    const [text, setText] = useState("");

    return (
        <form onSubmit={e => {
            e.preventDefault();
            setText("");
            onAdd(text);
        }}>
            <input
                type="text"
                placeholder="Add Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            /> {" "}
            <button
                type="submit"
            >Add</button>
        </form>
    )   
}