import { useState } from "react";
import { TodosType, UpdateTodoTypes } from "../App";

type ReactJsxElm = React.JSX.Element;


function Task(
    {
        todo,
        onDelete,
        onUpDateChanges
    }: {
        todo: TodosType[0],
        onDelete: (id: number) => void,
        onUpDateChanges: (args: UpdateTodoTypes, todoId: number) => void
    }
): ReactJsxElm {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent: ReactJsxElm;

    if(isEditing) {
        todoContent = (
            <>
                <input type="text"
                    value={todo.title}
                    onChange={(e) => onUpDateChanges(e, todo.id)}
                />
                <button
                    onClick={(e) => {
                        setIsEditing(false);
                        onUpDateChanges(e, todo.id)
                    }}
                >Save</button>
            </>
        )
    } else {
        todoContent = (
            <>
            {todo.title}
            {" "}
            <button
                onClick={() => setIsEditing(true)}
            >Edit</button>
            {" "}
            </>
        )
    }

    return (
        <>
            <input type="checkbox"
                checked={todo.done}
                onChange={(e) => onUpDateChanges(e, todo.id)}

            />
            {todoContent}
            <button
                onClick={() => onDelete(todo.id)}
            >Delete</button>
        </>
    )
};

export default function TaskList(
    {
        todoList,
        onDeleteTodo,
        onUpdateTodo
    }:{
        todoList: TodosType,
        onDeleteTodo: (id: number) => void,
        onUpdateTodo: (args: UpdateTodoTypes, todoId: number) => void
    }
): ReactJsxElm {


    return (
        <ul>
            {todoList.map((todo) => (
                <li key={todo.id}>
                    <Task 
                        todo={todo}
                        onDelete={onDeleteTodo}
                        onUpDateChanges={onUpdateTodo}
                    />
                </li>

            ))}
        </ul>
    )
};