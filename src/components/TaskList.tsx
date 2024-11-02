import { useState } from "react";
import { Task } from "../assets/tasks"

export default function TaskList({tasks, onTaskChanges, onDeleteTask} : {
    tasks: Task[],
    onTaskChanges: (task: Task) => void,
    onDeleteTask: (taskId: Task["id"]) => void
})  {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskComp 
                        task={task}
                        onChange={onTaskChanges}
                        onDelete={onDeleteTask}
                    />

                </li>
            ))}
        </ul>
    )
};

function TaskComp({task, onChange, onDelete} : {
    task: Task,
    onChange: (task: Task) => void,
    onDelete: (taskId: Task["id"]) => void;
}) {
    const [isEditing, setIsEditing] = useState(false);
 
    let taskContent: React.JSX.Element;
    
    if(isEditing) {
        taskContent = (
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(false);
            }}>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value
                        })
                    }}
                />
                <button type="submit">Save</button>
            </form>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    
    return (
        <>
            <input
                type="checkbox"
                checked = {task.done}
                onChange={(e) => onChange({
                    ...task,
                    done: e.target.checked
                })}
            />
            {taskContent}
            <button onClick={() => {
                onDelete(task.id)
            }}>Delete</button>

        </>
    )
}