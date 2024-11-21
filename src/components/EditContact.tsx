import { useState } from "react";
import { Contact } from "../assets/data"

type MyEditContactProps = {
    selectedContact: Contact,
    onSave: (editedContact: Contact) => void
};
export default function EditContact(props: MyEditContactProps) {
    const [name, setName] = useState(props.selectedContact.name);
    const [email, setEmail] = useState(props.selectedContact.email)
  


    return (
        <section>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSave({
                        ...props.selectedContact,
                        name: name,
                        email: email
                    })
                }}
                onReset={(e) => {
                    e.preventDefault();
                    setName(props.selectedContact.name);
                    setEmail(props.selectedContact.email);

                }}
            >
                <label>
                    Name:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <button type="submit">Save</button>
                <button type="reset">Reset</button>
            </form>
        </section>
    )
};