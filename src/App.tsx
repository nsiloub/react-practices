// Challenge 3 of 5: Reset a detail form  --- preserving-and-resetting-state

import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";

export type Contact = {
    id: number,
    name: string,
    email: string
};

// eslint-disable-next-line react-refresh/only-export-components
export const initialContacts: Contact[] = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];


export default function ContactManager() {
    const [contacts, setContacts] = useState<Contact[]>(  initialContacts );
    const [selectedId, setSelectedId] = useState<Contact["id"]>(0);

    const foundContact: Contact | undefined = contacts.find(contact => contact.id === selectedId);
    const selectedContact: Contact = foundContact ? foundContact : contacts[0];

    function handleSave(updatedContact: Contact): void {
        const nextContacts: Contact[] = contacts.map(contact => {
            if(contact.id === updatedContact.id) {
                return updatedContact;
            } else {
                return contact
            }

        })
        setContacts(nextContacts);
    };

    return (
        <div>
            <ContactList
                contacts={contacts}
                onSelected={((id) => setSelectedId(id))}
                selectedId={selectedId}
            />
            <hr />
            <EditContact
                key={selectedId} // THIS IS THE PART (SOLUTION)
                initialContact={selectedContact}
                onSave={handleSave}
            />
        </div>
    )
};