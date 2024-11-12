import "./App.css"
import TaskList from "./components/TaskList";
import { TasksProvider } from "./components/TasksContext";
import AddTaks from "./components/AddTask";

export default function TaskApp() {
    
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTaks />
            <TaskList />            
        </TasksProvider>
    )
};