import { Contact } from "../assets/data"

type MyContactListProps = {
    contacts: Contact[],
    selectedContactId: number,
    onSelect: (contactId: number) => void
}
export default function ContactList( props: MyContactListProps) {
    return (
        <section>
            <ul>
                {props.contacts.map((contact) => (
                    <li key={contact.id}>
                        <button onClick={() => {
                            props.onSelect(contact.id);
                        }}
                    >
                            {props.selectedContactId === contact.id ? 
                                <b>{contact.name}</b> : 
                                contact.name
                            }
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}