import { useState } from "react"
import { Task } from "../assets/tasks"

export default function TaskList({tasks, onChangeTask, onDeleteTask} : {
    tasks: Task[],
    onChangeTask: (task: Task) => void,
    onDeleteTask: (taskId: Task["id"]) => void
})  {


    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskComponent
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    )
};

function TaskComponent({task, onChange, onDelete} : {
    task: Task,
    onChange: (task: Task) => void,
    onDelete: (taskId: Task["id"]) => void
}) {

    const [isEditing, setIsEditing] = useState(false);
    let taskContent: React.JSX.Element;

    if(isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
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
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    })
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    )
};