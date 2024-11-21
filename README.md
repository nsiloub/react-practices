### ~~Don't do this~~

```tsx
    const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]); // don't do this

    //...

    useEffect(() => {
    setVisibleTodos(getVisibleTodos(todos, showActiveOnly));
    }, [todos, showActiveOnly]);
```
### ~~Don't do this neither~~:
```tsx
    const visibleTodos: Todo[] = getVisibleTodos(todos, showActiveOnly);
```
&nbsp; &nbsp;
----
----
## Instead, do this 
```tsx
const visibleTodos : Todo[] = useMemo(() => {
    return getVisibleTodos(todos, showActiveOnly)
}, [todos, showActiveOnly]);
```

