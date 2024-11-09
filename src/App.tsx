// Challenge 3 of 4: Restore input values when switching between tabs -- extracting-state-logic-into-a-reducer

import { useReducer } from "react";
import "./App.css";
import { contacts } from "./assets/data";
import ContactList from "./components/ContactList";
import messengerReducer, { initialState } from "./store/messengerReducer";
import Chat from "./components/Chat";


export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);

    const selectedContactId = state.selectedContactId;
    const message = state[selectedContactId];

    return (
        <div>

            <ContactList
                contacts={contacts}
                selectedContactId={selectedContactId}
                dispatch={dispatch}
            />

            < Chat
                contact={contacts[selectedContactId]}
                message={message}
                dispatch={dispatch}
            />

        </div>
    )
};