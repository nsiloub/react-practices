// Challenge 1 of 4: Dispatch actions from event handlers --- extracting-state-logic-into-a-reducer

import { useReducer } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import { Contact, contacts } from "./assets/data";
import { initialState, messengerReducer, State } from "./store/messengerReducer";
import Chat from "./components/Chat";

export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    
    const message: State["message"] = state.message;
    const selectedContact: Contact = contacts[state.selectedId];

    function handleSelectContact(contactId: Contact["id"]): void {
        dispatch({
            type: "SELECTED_CONTACT",
            payload: contactId
        })
    };
    function handleMessageChanges(msg: string): void {
        dispatch({
            type: "EDDITED_MESSAGE",
            payload: msg
        })
    };

    return (
        <div>
            <ContactList
                contacts={contacts}
                onSelectContact={handleSelectContact}
            />

            <Chat
                message={message}
                contact={selectedContact}
                onEditMessage={handleMessageChanges}
            />
        </div>
    )
}