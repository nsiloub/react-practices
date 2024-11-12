import { Task } from "../assets/data";

type State = Task[];

type ADDED_TASK = {
    type: "ADDED_TASK",
    payload: {
        text: string
    }
};
type MODIFIED_TASK = {
    type: "MODIFIED_TASK",
    payload: {
        task: Task
    }
};
type DELETED_TASK = {
    type: "DELETED_TASK",
    payload: {
        id: number
    }
};

export type Action = ADDED_TASK | MODIFIED_TASK | DELETED_TASK;

export default function tasksReducer(state: State, action: Action): State {
    switch(action.type) {
        case "ADDED_TASK": {
            const nextId = state.length > 0 ? state.sort((a, b) => a.id - b.id )[state.length-1].id + 1 : 0;
            const nextState: State = [...state,  {
                id: nextId,
                text: action.payload.text,
                done: false
            }];
            return nextState;
        }
        case "MODIFIED_TASK": {
            const concernedContactId: number = action.payload.task.id;
            const nextState: State = state.map((contact) => {
                if(contact.id === concernedContactId) {
                    return action.payload.task
                } else {
                    return contact
                }
            });
            return nextState;
        }
        case "DELETED_TASK": {
            const deletedContactId = action.payload.id;
            const nextState: State = state.filter((contact) => contact.id !== deletedContactId);
            return nextState;
        }
        default: {
            throw Error("Unknown action: " + action);
        }
    }
};