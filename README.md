Don't use ```function``` or ```object``` in your ```useEffect```'s ***dependency array. even if their content is the same: because
```ts
const option1 = {a: 1};
const option2 = {a: 1}
console.log(Object.is(options1, options2)); // false
```
### ~~So don't~~

```tsx
export default function ChatRoom({ options }: { options: Options }) {
    useEffect(() => {
        const connection: Connection = createConnection(options.serverUrl, options.roomId);
        connection.connect()

        return () => {
            connection.disconnect()
        }
    }, [options]); // object/functions show as changed even if they have the same content
```

### ===> Instead , do this instead:
destructure the object's properties as variable, and use them in your dependency array. This way, only them will trigger change and nothing else:
```tsx
export default function ChatRoom({ options }: { options: Options }) {
    
    const {serverUrl, roomId} = options; // destructure/declare the properites as variables instead of using objects/functions

    useEffect(() => {
        const connection: Connection = createConnection(serverUrl, roomId);
        connection.connect()

        return () => {
            connection.disconnect()
        }
    }, [roomId, serverUrl]); // variables are better, they don't show as changed if they didn't change their value
```