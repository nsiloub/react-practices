# Best practices for DOM manipulation with refs 

- Avoid using ```useRef``` for manipulating the DOM as much as you can
- **Best practices**/uses of ```useRef``` can include **non-destructive actions** like:
    - Managing focus;
    - scroll position
    - calling browser API
- Be cautios for other actions beside the "non-destructives" ones.


## Example of bad practice:
In the following example, when the node (parragraoh ```p``` element) is forecefully  removed with ```.remove()``` method of ```useRef```, react has no idea about the DOM changes, and when it tries back to show/hide the paragraph (```p```), the code crashes
