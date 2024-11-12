import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function AddTaks() {
    const dispatch = useTasksDispatch() // custom hook cleaner than useContext(TaskDispatchContext);
    const [text, setText] = useState("");
    return (
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch({
                type: "ADDED_TASK",
                payload: {
                    text: text
                }
            })
        }}>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                required
            />
            <button
                type="submit"
                disabled={text.length < 1}
            >Add</button>
        </form>
    )
};