import { Contact } from "../assets/data"

export default function ContactList({contacts, onSelectContact} : {
    contacts: Contact[], 
    onSelectContact: (contactId: Contact["id"]) => void
}) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <ContactComp
                            contact={contact}
                            onSelect={onSelectContact}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
};

function ContactComp({contact, onSelect} : {
    contact: Contact,
    onSelect: (contactId: Contact["id"]) => void
}) {
    return (
        <li>
            <button onClick={() => {
                onSelect(contact.id);
            }}> {contact.name} </button>
        </li>
    )
};