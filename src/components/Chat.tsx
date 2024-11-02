import { Contact } from "../assets/data"

export default function Chat({message, contact, onEditMessage} : {
    message: string, contact: Contact,
    onEditMessage: (msg: string) => void
}) {
    return (
        <section className="chat">
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <textarea
                    value={message}
                    placeholder={"Chat to " + contact.name}
                    onChange={(e) => {
                        onEditMessage(e.target.value);
                    }}
                />
                <button style={{display: "block"}} type="submit">Send to {contact.name}@mail.com</button>
            </form>
            <br />
        </section>
    )
};