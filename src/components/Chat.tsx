import { Contact } from "../assets/data"

export default function Chat({msg, contact, onEditMessage} : {
    msg: string, contact: Contact,
    onEditMessage: (message: string) => void
}) {
    return (
        <section className="chat">
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(`Sending: "${msg}" to ${contact.email}`);
                onEditMessage("");
            }}>
                <textarea
                    value={msg}
                    required
                    onChange={(e) => onEditMessage(e.target.value)}
                    placeholder={"Chat to " + contact.name}
                />
                <button
                    type="submit"
                    disabled = {msg.length + 1 <= 1}
                    style={{display: "block"}}
                >
                    Send to {contact.name}@mail.com
                </button>
            </form>
        </section>
    )
}