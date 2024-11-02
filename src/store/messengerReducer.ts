
export type State = {
    selectedId: number,
    message: string
}
export const initialState: State = {
    selectedId: 0,
    message: "Hello"
};

type SELECTED_CONTACT_ACTION = {
    type: "SELECTED_CONTACT",
    payload: State["selectedId"]
};
type EDITED_MESSAGE_ACTION = {
    type: "EDDITED_MESSAGE",
    payload: State["message"]
}

type Action = SELECTED_CONTACT_ACTION | EDITED_MESSAGE_ACTION;

export function messengerReducer(state: State, action: Action): State {
    switch(action.type) {
        case "SELECTED_CONTACT": {
            const nextId: number = action.payload;
            const nextState: State = {
                ...state,
                selectedId: nextId
            };
            return nextState;
        }
        case "EDDITED_MESSAGE": {
            const nextMsg: string = action.payload;
            const nextState: State = {
                ...state,
                message: nextMsg
            }

            return nextState;
        }
        default: {
            throw Error("Unknown action: " + action);
        }
    }
};