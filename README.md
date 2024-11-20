### Problem in this code

- **Race conditions**: when fetching code, results are asynchronuous, so with \  ```useEffect``` it will KEEP ON SHOWING the latest fecthed in the the selection (in our case). \ 
to  resolve this, we have to "ignore" the asynchronuous (with latency) result, if we've already fetched our data

- so instead of doing this: THIS WON'T WORK
```ts
    useEffect(() => {
        setBio(null); // this is to ensure that not previously fetched bio is used, and make code more predictable
        fetchBio(person).then(result => {
            setBio(result);
            
        });

        return () => {
            fetchBio(person)
        }
    }, [person]);
```

- WE HAVE TO DO THIS

```ts
    useEffect(() => {
        let ignore = false;
        setBio(null); // this is to ensure that not previously fetched bio is used, and make code more predictable
        fetchBio(person).then(result => {
            if(!ignore) { // to only fetch if we're "not yet done finding the bio"
                setBio(result);
            }
        });

        return () => {
            ignore = true; // to signal that "we are found our bio, and you can cancel further fetch,..."
        }
    }, [person]);
```

full code in the ```/src/App.tsx``` => under ```useEffect```


