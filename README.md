# Best practices for DOM manipulation with refs 

- Avoid using ```useRef``` for manipulating the DOM as much as you can
- **Best practices**/uses of ```useRef``` can include **non-destructive actions** like:
    - Managing focus;
    - scroll position
    - calling browser API
- Be cautios for other actions beside the "non-destructives" ones.


## Example of bad practice:
In the following example, when the node (parragraoh ```p``` element) is forecefully  removed with ```.remove()``` method of ```useRef```, react has no idea about the DOM changes, and when it tries back to show/hide the paragraph (```p```), the code crashes

```tsx
import { useRef, useState } from "react"

export default function Counter() {
    const [show, setShow] = useState(true);
    const pRef = useRef<HTMLParagraphElement>(null);

    return (
        <div>
            <button onClick={() => {
                setShow(!show);
            }}>
                Toggle with setState
            </button>
            <button onClick={() => {
                pRef.current?.remove(); // Removes the referenced node from DOM, without React noticing, and will cause crashes 
            }}>
                Remove from the DOM
            </button>
            { show && <p ref={pRef}>Hello world</p>}
        </div>
    )
};
```