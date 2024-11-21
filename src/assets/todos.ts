let nextId = 0;
let calls = 0;

export type Todo = {
    id: number,
    text: string,
    completed: boolean
}

export function getVisibleTodos(todos: Todo[], showActive: boolean): Todo[] {
    console.log(`getVisibleTodos() was called ${++calls} times`);
    const activeTodos: Todo[] = todos.filter((todo) => !todo.completed);
    const visibleTodos: Todo[] = showActive ? activeTodos : todos;
    return visibleTodos;
};

// Only to pre-populate and make it easier for components to add only text part
export function createTodo(text: string, completed?: boolean): Todo {
    return {
        id: nextId++,
        text: text,
        completed: completed ? completed : false,
    }
};

export const initialTodos: Todo[] = [
    createTodo("Get apples", true),
    createTodo("Get oranges", true),
    createTodo("Get oranges"),
];