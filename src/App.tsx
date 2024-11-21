// Challenge 3 of 4: Reset state without Effects [using component's key instead] ---- you-might-not-need-an-effect

import { useState } from "react";
import "./App.css";
import { Contact, initialContacts } from "./assets/data";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";

export default function ContactManager() {
    const [contacts, setContacts] = useState<Contact[]>(initialContacts);
    const [selectedContactId, setSelectedContactId] = useState(0)
    const selectedContact: Contact = contacts.filter((c) => c.id === selectedContactId)[0];

    function handleSave(savedContact: Contact) {
        const nextContacts: Contact[] = contacts.map((contact) => {
            if(savedContact.id === contact.id) {
                return savedContact;
            } else  {
                return contact
            }
        });

        return setContacts(nextContacts);
    }

    return (
        <>
            <ContactList
                contacts={contacts}
                selectedContactId={selectedContactId}
                onSelect={setSelectedContactId}
            />
            <hr />
            <EditContact
                key={selectedContactId}
                selectedContact={selectedContact}
                onSave={handleSave}
            />
        </>
    )
}