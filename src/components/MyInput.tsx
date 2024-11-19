import { useEffect, useRef } from "react"

type MyInputProps = {
    value: string,
    onTextChanges: (text: string) => void,
    shouldFocus: boolean
}
export default function MyInput(props: MyInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(props.shouldFocus) {
            inputRef.current?.focus()
        }
    }, [props.shouldFocus]);


    // The problem was the following code
    // useEffect(() => {
    //     ref.current.focus();
    // }, []);
    // when calling multiple .focus(), only the last one wins
    // That's why only the last one was getting focused each time instead of the first one

    return (
        <input
            ref={inputRef}
            value={props.value}
            onChange={e => props.onTextChanges(e.target.value)}
        />
    )
}