# Accessing another component’s DOM nodes
***(Use ```forwardRef``` for that)***

if you want to use another's component's ```ref```, **don't directly do the following:**

```tsx
import { useRef } from "react";


export default function MyForm() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>  
            <MyInput inputRef={inputRef}/>
            <button onClick={handleClick}>
                Focus On The Input
            </button>
        </>
    )
};

function MyInput( {inputRef} : {
    inputRef: React.RefObject<HTMLInputElement>
} ) {
    return (
        <input ref={inputRef}/>
    )
}
```
\
**Instead, use the ```forwardRef```** from  the component that wants to emmit the ```ref``` like so:

```tsx
type MyInputProps = React.InputHTMLAttributes<HTMLInputElement> & { // for extending the built-ins and adding the customs
    // any other custom props
    foo: string,
    bar: number
};

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, inputRef) => {
    return (
        <input {...props} ref={inputRef}/>
    )
})
```

and then in the component which wants to use it, just use the ```ref``` keyword instead of the name, like so:
```tsx
/// ...
return(
    /// ...

    <MyInput ref={inputRef} foo="blablabla!" bar={123}/>


    /// ....
)
```


### full code in the Codes