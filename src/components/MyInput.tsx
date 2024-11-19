import { useEffect, useRef } from "react"

type MyInputProps = {
    name: string,
    onNameChanges: (text: string) => void
}
export default function MyInput(props: MyInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus(); 

        // cleanup function not needed in this case, because
        // when the user blurs (go away from the element), React
        // Automatically cleanup and cancel this .focus()
    }, [])


    return (
        <input
            ref={inputRef}
            value={props.name}
            onChange={(e) =>props.onNameChanges(e.target.value)}
        />
    )
}