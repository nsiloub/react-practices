- Different behaviours of using depedency array:

```tsx
useEffect(() => {
    // This runs after every render (and re-render)
});

useEffect(() => {
    // This runs on mount (when the component appears)
}, []);

useEffect(() => {
    // This runs on mount, and any time [a] or [b] changes
}, [a, b]);

```

- Variable can be ommited from dependency array if linter see it as "stable" (won't change) and not passed from a parent component. see the example in the ```VideoPlayer.tsx``` file