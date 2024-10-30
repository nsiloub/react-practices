import { Contact } from "../App"

export default function ContactList({contacts, onSelected, selectedId} : {
    contacts: Contact[],
    onSelected: (contactId: Contact["id"]) => void,
    selectedId: Contact["id"]
}) {
    return (
        <section>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button onClick={() => {
                            onSelected(contact.id)
                        }}>
                            {contact.id === selectedId ? (
                                <b> {contact.name} </b>
                            ) : 
                                contact.name
                            }
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
};