// Challenge 1 of 4: Transform data without Effects --- you-might-not-need-an-effect

import { useState } from "react";
import "./App.css";
import createTodo, { initialTodos, Todo } from "./assets/todos";

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>( initialTodos );
    const [showOnlyActive, setShowOnlyActive] = useState(false);

    const visibleTodos: Todo[] = showOnlyActive ? todos.filter(t => !t.completed) : todos;
    const unCompletedTodos: number = todos.filter(t => !t.completed).length;

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showOnlyActive}
                    onChange={(e) => setShowOnlyActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <AddNewTodo onAdd={ (newTodo) => setTodos([... todos, newTodo])}/>
            <ul>
                {visibleTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.completed ? <s> {todo.text} </s> : todo.text}
                    </li>
                ))}
            </ul>
            <p> {unCompletedTodos} todo{unCompletedTodos > 1 ? "s" : ""} left </p>
        </>
    )
};

function AddNewTodo( {onAdd} : {
    onAdd: (todo: Todo) => void
}) {
    const [text, setText] = useState("");

    function handleSubmit() {
        setText("");
        onAdd(createTodo({
            id: 0,
            text: text,
            completed: false
        }))
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }}>
            <input
                placeholder="Enter Todo Text"
                onChange={(e) => setText(e.target.value)}
                required
                value={text}
            />
            <button type="submit" disabled={text.length < 1}>Add</button>
        </form>
    )
}