// TaskApp USING REDUCERS --- extracting-state-logic-into-a-reducer

import { useReducer } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks, Task } from "./assets/tasks";
import tasksReducer from "./store/tasksReducer";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    
    function handleAddText(text: string): void {
        dispatch({
            type: "ADDED",
            payload: {
                text: text
            }
        })
    };

    function handleTaskChanges(task: Task): void {
        dispatch({
            type: "MODIFIED",
            payload: {
                task: task
            }
        })
    };

    function handleDeleteTask(taskId: Task["id"]): void {
        dispatch({
            type: "DELETED",
            payload: {
                taskId: taskId
            }
        })
    };

    return (
        <>
            <h1>Prague Itinerary</h1>

            <AddTask
                onAdd={handleAddText}
            />

            <TaskList
                tasks={tasks}
                onTaskChanges={handleTaskChanges}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}