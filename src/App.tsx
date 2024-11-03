// Challenge 2 of 4: Clear the input on sending a message --- extracting-state-logic-into-a-reducer

import { useReducer } from "react";
import "./App.css";
import { Contact, contacts } from "./assets/data";
import Chat from "./components/Chat";
import ContactList from "./components/ContactList";
import { initialState, messengerReducer } from "./store/messengerReducer";

export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState );

    const message = state.message;
    const foundContact = contacts.find((c) => c.id === state.selectedContactId);
    let selectedContact: Contact;
    if(foundContact) {
        selectedContact = foundContact
    } else {
        selectedContact = contacts[0];
        throw Error("Contact Not found, and reverted the the fallback (first contact) \r please check the selected contact implementation")
    }
    

    function handleSelectContact(contactId: number): void {
        dispatch({
            type: "SELECTED_CONTACT",
            payload: contactId
        })
    };

    function handleMessagEdition(message: string): void {
       dispatch({
            type: "EDITED_MESSAGE",
            payload: message
       }) 
    }

    return (
        <div>
            <ContactList
                contacts={contacts}
                onSelectContact={handleSelectContact}
            />

            <Chat
                msg={message}
                contact={selectedContact}
                onEditMessage={handleMessagEdition}
            />
        </div>
    )
}