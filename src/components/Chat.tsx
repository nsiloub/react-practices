import { Contact } from "../assets/data"
import { Action } from "../store/messengerReducer";

export default function Chat( {contact, message, dispatch} : {
    contact: Contact,
    message: string, 
    dispatch: (action: Action) => void
}) {
    return (
        <section className="chat">
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "SENT_MESSAGE",
                    payload: {
                        contactId: contact.id,
                        message: ""
                    }
                })
            }}>
                <textarea
                    placeholder={`Chat to ${contact.name}`}
                    value={message}
                    onChange={(e) => {
                        dispatch({
                            type: "EDITED_MESSAGE",
                            payload: {
                                contactId: contact.id,
                                message: e.target.value
                            }
                        })
                    }}
                />

                <button
                    type="submit"
                    style={{display: "block"}}
                > Send to {contact.name}@mail.com </button>
            </form>
        </section>
    )
}