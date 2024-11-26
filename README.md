To avoid unnecessarly re-rendering, ***restarting*** the ```useEffect``` code and its ***cleanup*** function, ~~~don't read the ```count``` state when updating the using the ```setCount```~~~

```tsx
    // Effect that updates the counter, and show the logs
    useEffect(() => {
        const delay = 1000;

        console.log("✅ Creating an interval");
        const timerId = setInterval(() => {
            console.log("⏰ Interval tick");
            setCount(count + 1);  // using the "count" state requires you to include it in dependency array
        }, delay);

        return () => {
            console.log("❌ Clearing an interval");
            clearInterval(timerId); // cleared unneccessarly on every second's timer because of the "count" state
        }
    }, [count]); // each "count" state changes re-renders, and restart the useEffect process over and over
```

Instead, use an **updater function** inside the ```setCount``` function by incrementing on the ***previous*** state, like so
```tsx
    // Effect that updates the counter, and show the logs
    useEffect(() => {
        const delay = 1000;

        console.log("✅ Creating an interval");
        const timerId = setInterval(() => {
            console.log("⏰ Interval tick");
            // setCount(count + 1);  //avoid using the "count" state. See the README.md for more

            setCount(prevCount => prevCount + 1) // updater function inside setCount, to avoid unnecessary "count" dependency. See README.md for more

        }, delay);

        return () => {
            console.log("❌ Clearing an interval");
            clearInterval(timerId);
        }
    }, []); // "count" state not required as a dependency now. See README.md for more

```