import { useState } from "react"
import { Contact } from "../App";

export default function EditContact({initialContact, onSave} : {
    initialContact: Contact,
    onSave: (updatedContact: Contact) => void
}) {
    const [name, setName] = useState( initialContact.name );
    const [email, setEmail] = useState( initialContact.email );

    return (
        <section>
            <label>
                Name: {" "}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email: {" "}
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button onClick={() => {
                const updatedContact: Contact = {
                    id: initialContact.id,
                    name: name,
                    email: email
                };
                onSave(updatedContact);
            }}>
                Save
            </button>
            <button onClick={() => {
                setName(initialContact.name);
                setEmail(initialContact.email);
            }}>
                Reset
            </button>
        </section>
    )
};