import { useState } from "react";

export default function AddTodo(
    {
        onAddTodo
    }: {
        onAddTodo: (title: string) => void
    }
): React.JSX.Element{
    const [title, setTitle] = useState("");

    return(
        <>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => onAddTodo(title)}
            >Add</button>
        </>
    )
};