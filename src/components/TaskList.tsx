import { useContext, useState } from "react"
import { TaskDispatchContext, useTasks } from "./TasksContext"
import { Task } from "../assets/data";

export default function TaskList() {
    const tasks: Task[] =  useTasks() // custom Hook simpler than useContext(TaskListContext);
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskComp task={task}/>
                </li>
            ))}
        </ul>
    )
};

function TaskComp( {task} : {
    task: Task
} ) {
    const [isEditing, setIsEditing] = useState(false);

    const dispatch =  useContext(TaskDispatchContext);

    let taskContent: React.JSX.Element;
    if(isEditing) {
        taskContent = <form onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);

        }} 
        style={{display: "inline"}}>
            <input
                type="text"
                value={task.text}
                onChange={(e) => {
                    dispatch({
                        type: "MODIFIED_TASK",
                        payload: {
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        }
                    })
                }}
                placeholder="Task description"
            />
            <button type="submit" style={{display: "inline"}}>Save</button>
        </form>
    } else {
        taskContent = <>
            {task.text}
            <button onClick={() => {
                setIsEditing(true);
            }}>Edit</button>
        </>
    }


    return (
        <>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    dispatch({
                        type: "MODIFIED_TASK", 
                        payload: {
                            task: {
                                ...task,
                                done: e.target.checked
                            }
                        }
                    })
                }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type: "DELETED_TASK",
                    payload: {
                        id: task.id
                    }
                })
            }}>Delete</button>
        </>
    )
}