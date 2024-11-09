import { contacts } from "../assets/data";

type Chats = {
    [contactId: number]: string
}

type State = Chats & { // spreading all the Chats element plus the selectedId into State 
    selectedContactId: number
}

// Individual user's actions/events

type CHANGED_SELECTION = {
    type: "CHANGED_SELECTION",
    payload: {
        contactId: number
    }
};
type EDITED_MESSAGE = {
    type: "EDITED_MESSAGE",
    payload: {
        message: string,
        contactId: number
    }
};
type SENT_MESSAGE = {
    type: "SENT_MESSAGE",
    payload: {
        contactId: number,
        message: ""
    }
};

// The action object
export type Action = CHANGED_SELECTION | EDITED_MESSAGE | SENT_MESSAGE;

export const initialState: State = {
    selectedContactId: 0,
    ...contacts.reduce((accumulator: Chats, current) => {
        accumulator[current.id] =  `Hello, ${current.name}`
        return accumulator
    }, {} as Chats)
};


export default function messengerReducer(state: State, action: Action): State {
    switch(action.type) {
        case "CHANGED_SELECTION": {
            const nextState: State = {
                ...state,
                selectedContactId: action.payload.contactId
            };

            return nextState;
        }
        case "EDITED_MESSAGE": {
            const contactId  = action.payload.contactId;
            const message = action.payload.message
            const nextState: State = {
                ...state,
                [contactId]: message
            }
            
            return nextState;
        }
        case "SENT_MESSAGE": {
            const message = action.payload.message;
            const selectedContactId = action.payload.contactId;

            const nextState = {
                ...state,
                [selectedContactId]: message
            }
            
            return nextState;
        }
        default: {
            throw Error("Unknown action type: " + action);
        }
    }
}