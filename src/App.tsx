// Displaying many visual states at once (identifying component's different visual states)
    // If a component has a lot of visual states,
    // it can be convenient to show them all on one page:

import Form from "./components/Form";
type Status = "empty" | "typing" | "submiting" | "success" | "error";

export default function App(): React.JSX.Element {
    const statuses: Status[] = [
        "empty", "typing", "submiting", "success", "error"
    ]
    return (
        <>
            <h2>City Quiz</h2>
            <p>
                In which city there a billboard that turns air into drinkable water ?
            </p>
            <hr /><hr /><hr /><br /> <br />
            {statuses.map((status, ind) => (
                <section key={ind}>
                    <Form status={status} />
                    <hr />
                </section>
            ))}
        </>
    )
}