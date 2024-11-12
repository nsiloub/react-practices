import { createContext, ReactNode, useContext, useReducer } from "react";
import { initialTasks, Task } from "../assets/data";
import tasksReducer, { Action } from "../store/tasksReducer";

export const TaskListContext = createContext<Task[]>(initialTasks);

export const TaskDispatchContext =  createContext<((action: Action) =>void)>(function(){}/*void fn just for TS*/);

// TasksProvider() is to make the main TasksApp component cleaner and simpler
export  function TasksProvider( {children} : {
    children: ReactNode
} ) {
    const [state, dispatch] = useReducer(tasksReducer, initialTasks);
    return (
        <TaskListContext.Provider value={state}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}                
            </TaskDispatchContext.Provider>
        </TaskListContext.Provider>
    )
};

// custom context Hooks to simplify the code 
export function useTasks() {
    return useContext(TaskListContext);
};
export function useTasksDispatch() {
    return useContext(TaskDispatchContext);
};