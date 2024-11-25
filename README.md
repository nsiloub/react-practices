On switching the roomId, only the last one wa showing up, because of the ```setTimeout``` used in the ```useEffect``` like this
```tsx

    const onConnected = useEffectEvent(() => {
        setTimeout(() => {
            showNotifications(`Welcome to the ${roomId}`, theme);
        }, 2000);
    });

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on("connected", () => {

            setTimeout(() => { //Here
                onConnected()
            }, 2000)
            
           onConnected()
        });
        
        connection.connect()

        return () => {
            connection.disconnect();
        }
    }, [roomId]);

```
Instead do the following:

```tsx

    const onConnected = useEffectEvent(() => {
        setTimeout(() => {
            showNotifications(`Welcome to the ${roomId}`, theme);
        }, 2000);
    });


    

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on("connected", () => {
           onConnected()
        });
        
        connection.connect()

        return () => {
            connection.disconnect();
        }
    }, [roomId]);
```

- Another solution is to pass the roomId as a parameter from the Effect-Event like so