import { forwardRef, InputHTMLAttributes } from "react";

type MyInputProps = InputHTMLAttributes<HTMLInputElement> & {
// add in your props
}

export const SearchInput = forwardRef<HTMLInputElement, MyInputProps>((props, inputRef) => {
    return (
        <input
            type="text"
            placeholder="Looking for something ?"
            {...props}
            ref={inputRef}
        />
    )
})