// Challenge 2 of 4: Cache a calculation without Effects [using useMemo hook] --- you-might-not-need-an-effect

import { useMemo, useState } from "react"
import { createTodo, getVisibleTodos, initialTodos, Todo } from "./assets/todos";

export default function TodoList() {
    const [showActiveOnly, setShowActiveOnly] = useState(false);
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    // const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]); // don't do this

    function handleAddTodo(text: string) {
        setText("");
        setTodos([...todos, createTodo(text)]);
    };

    // ! Don't do this, un-necessary re-renders after each commit
    // useEffect(() => {
    //     setVisibleTodos(getVisibleTodos(todos, showActiveOnly));
    // }, [todos, showActiveOnly]);
    
    // ! Don't do this: expensive, and re-renders at any change
    // const visibleTodos: Todo[] = getVisibleTodos(todos, showActiveOnly);
    
    // todo: DO THIS INSTEAD: only re-render on todos, and showActiveOly changes
    const visibleTodos : Todo[] = useMemo(() => {
        return getVisibleTodos(todos, showActiveOnly)
    }, [todos, showActiveOnly]);

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showActiveOnly}
                    onChange={(e) => setShowActiveOnly(e.target.checked)}
                />
                Show only active todos
            </label>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddTodo(text)
            }}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Todo Text"
                    required
                />
                <button
                    type="submit"
                    disabled={text.length < 1}
                >
                    Add
                </button>
            </form>
            <ul>
                {visibleTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.completed ? <s> {todo.text} </s> : todo.text}
                    </li>
                ))}
            </ul>
        </>
    )
};