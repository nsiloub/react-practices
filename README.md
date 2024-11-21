**~~Don't do this~~**: Trying to set the ```email``` and ```name``` on ```selectedContact``` changes using ```useEffect```
```tsx

// Don't do this:
useEffect(() => {
    setName(selectedContact.name);
    setEmail(selectedContact.email);
}, [selectedContact]);

```

**Instead**: you can add a ```key``` for telling React that each input value is different, and when ```selectedContect``` changes, the new ```setName``` and  ```setEmail``` must be fired.
```tsx
    // App.tsx

    //...

    key={selectedContactId}
    selectedContact={selectedContact}
    onSave={handleSave}

    // ...
```
And the  ```setName``` and  ```setEmail``` will fire for the currently ```selectedContact``` diferent from the others
```tsx
    // EditContact.tsx

    // ... 

    <form
        onSubmit={(e) => {
            e.preventDefault();
            props.onSave({
                ...props.selectedContact,
                name: name,
                email: email
            })
        }}
        onReset={(e) => {
            e.preventDefault();
            setName(props.selectedContact.name); // Here 
            setEmail(props.selectedContact.email); // and Here

        }}
    >
```

