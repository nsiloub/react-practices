import { Task } from "../assets/tasks";


type ADDED_TASK_ACTION = {
    type: "ADDED",
    payload: {
        text: Task["text"]
    }
};
type MODIFIED_TASK_ACTION = {
    type: "MODIFIED",
    payload: {
        task: Task
    }
};
type DELETED_TASK_ACTION = {
    type: "DELETED",
    payload: {
        taskId: Task["id"]
    }
};

type TaskActions = ADDED_TASK_ACTION | MODIFIED_TASK_ACTION | DELETED_TASK_ACTION;

export default function tasksReducer(tasks: Task[], action: TaskActions) : Task[] {
    const nextId = tasks.sort((a, b) => a.id - b.id)[tasks.length - 1].id + 1;
    switch(action.type) {
        case "ADDED": {
            const newText = action.payload.text;
            const nextTasks: Task[] = [
                ...tasks,
                {
                    id: nextId,
                    text: newText,
                    done: false
                }
            ];
            return nextTasks;
        }
        case "MODIFIED": {
            const newTask: Task = action.payload.task;
            const nextTasks = tasks.map((task) => {
                if(task.id === newTask.id) {
                    return newTask
                } else {
                    return task;
                }
            });
            return nextTasks;
        }
        case "DELETED": {
            const selectedTaskId = action.payload.taskId;
            const nextTasks = tasks.filter((task) => task.id !== selectedTaskId);
            return nextTasks;
        }
        default: {
            return tasks;
        }
    }
}