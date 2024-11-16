// Accessing another component’s DOM nodes ([toggle focus on/off]: byMe) --- manipulating-the-dom-with-refs

// toggle focus on/off


import { forwardRef, InputHTMLAttributes, useRef, useState } from "react"

export default function Form() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    
    function handlClick() {
        setIsFocused(!isFocused);
    }

    if(isFocused) {
        inputRef.current?.focus();
    } else {
        inputRef.current?.blur()
    }
    
    return (
        <>
            <MyInput ref={inputRef} foo="bla bla bla!" bar={123}/>
            <button onClick={handlClick}>
                Focus on the input
            </button>
        </>
    )
};


type MyInputProps = InputHTMLAttributes<HTMLInputElement> & { // to extend the built-ins, and add the customs
    // You can add your custom props
    foo: string,
    bar: number
}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, inputRef) => {
    return (
        <input 
            {...props} // do whatever you want with the props
            ref={inputRef}
        />
    )
})