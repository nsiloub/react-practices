import { Contact } from "../assets/data";

export type State = {
    selectedContactId: number,
    message: string
};

export const initialState: State = {
    selectedContactId: 0,
    message: "Hello"
};

type SELECTED_CONTACT_ACTION = {
    type: "SELECTED_CONTACT",
    payload: Contact["id"]
};

type EDITED_MESSAGE_ACTION = {
    type: "EDITED_MESSAGE",
    payload: string,
}
type Action = SELECTED_CONTACT_ACTION | EDITED_MESSAGE_ACTION;
export function messengerReducer(state: State, action: Action): typeof state {
    switch(action.type) {
        case "SELECTED_CONTACT": {
            return {
                ...state,
                selectedContactId: action.payload
            };
        }
        case "EDITED_MESSAGE": {
            return {
                ...state,
                message: action.payload
            }
        }
        default: {
            throw Error("Unknown action type. the Action type doesn't exist in " + action)
        }
    }
}