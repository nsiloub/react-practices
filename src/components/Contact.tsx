import { useState } from "react"
import { Contact } from "../App"

export default function ContactComponnt({contact} : {
    contact: Contact
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <p><b> {contact.name} </b></p>
            {expanded &&
                <p><i> {contact.email} </i></p>
            }
            <button onClick={() => {
                setExpanded(!expanded)
            }}>
                {expanded ? "Hide": "Show"} email
            </button>
        </>
    )
};