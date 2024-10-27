// Challenge 2 of 5: Swap two form fields  --- preserving-and-resetting-state

import { useState } from "react"

export default function App() {
    const [reverse, setReverse] = useState(false);

    return (
        <>
            <label>
                {reverse ? (<>
                    <Field label="Last Name" key="lname" /><br />
                    <Field label="First Name" key="fname" /><br />
                </>) : (<>
                    <Field label="First Name" key="fname" /><br />
                    <Field label="Last Name" key="lname" /><br />
                </>)}

                <input
                    type="checkbox"
                    checked={reverse}
                    onChange={() => setReverse(!reverse)}
                />
                Reverse Order
            </label>
        </>
    )
};

function Field({label} : {
    label: string
}) {
    const [text, setText] = useState("")
    return (
        <label>
            {label}: {" "}
            <input
                type="text"
                value={text}
                placeholder={label}
                onChange={(e) => setText(e.target.value)}
            />
        </label>
    )
};