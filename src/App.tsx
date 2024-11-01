// TaskApp WITHOUT REDUCERS --- extracting-state-logic-into-a-reducer

import "./App.css"

import { useState } from "react";
import { initialTasks, Task } from "./assets/tasks"
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const nextId: Task["id"] = 3;

export default function TaskApp() {
    const [tasks, setTasks] = useState<Task[]>( initialTasks );
    
    function handleChangeTask(task: Task): void{
        setTasks(
            tasks.map((tsk) => {
                if(tsk.id === task.id) {
                    return task;
                } else {
                    return tsk;
                }
            })
        )
    };

    function handleDeleteTask(taskId: Task["id"]): void {
        setTasks([...tasks].filter((task) => task.id != taskId));
    };

    function handleAddTask(text: string): void {
        setTasks([
            ...tasks,
            {
                id: nextId,
                text: text,
                done: false
            }
        ])
    };

    return (
        
        <>
            <h1>Prague Itinerary</h1>
            <AddTask
                onAdd={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
};