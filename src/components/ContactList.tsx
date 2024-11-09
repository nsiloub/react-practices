import { Contact } from "../assets/data"
import { Action } from "../store/messengerReducer"

export default function ContactList( {contacts, selectedContactId, dispatch} : {
    contacts: Contact[],
    selectedContactId: number,
    dispatch: (action: Action) => void
}) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button onClick={() => {
                            dispatch( {
                                type : "CHANGED_SELECTION",
                                payload: {
                                    contactId: contact.id
                                }
                            } )
                        }}> {
                            selectedContactId === contact.id ? <b> {contact.name} </b> : 
                            contact.name
                        }</button>
                    </li>
                ))}
            </ul>
        </section>
    )
};