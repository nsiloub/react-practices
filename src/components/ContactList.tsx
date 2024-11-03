import { Contact } from "../assets/data"

export default function ContactList({contacts, onSelectContact} : {
    contacts: Contact[], 
    onSelectContact: (contactId: number) => void
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
    contact: Contact, onSelect: (contactId: number) => void
}) {
    return (
        <>
            <button onClick={() => onSelect(contact.id)}> {contact.name} </button>
        </>
    )
}