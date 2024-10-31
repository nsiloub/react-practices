// Challenge 5 of 5: Fix misplaced state in the list --- preserving-and-resetting-state

import { useState } from "react";
import "./App.css";
import ContactComponnt from "./components/Contact";

export default function ContactList() {
    const [reverse, setReverse] = useState(false);
    
    const displayedContacts = [...contacts];
    if(reverse) {
        displayedContacts.reverse();
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={reverse}
                    onChange={(e) => {
                        setReverse(e.target.checked);
                    }}
                /> {" "}
                Show in reverse order
            </label>
            <ul>
                {displayedContacts.map((contact, ind) => (
                    <li key={contact.id}> {/* instead of ind(INDEX: Position), use the id which is unique to each element */}
                        <ContactComponnt
                            contact={contact}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
};


export type Contact = {
    id: number,
    name: string,
    email: string
};


// eslint-disable-next-line react-refresh/only-export-components
export const contacts: Contact[] = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
]
