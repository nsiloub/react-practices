export type Todo = {
    id: number,
    text: string,
    completed: boolean
};

let nextId = 0;
export default function createTodo(todo: Todo): Todo {
    return {
        ...todo,
        id: nextId++
    }
};

export const  initialTodos: Todo[] = [
    createTodo({text: "Get Apples",completed: true, id: 0}),
    createTodo({text: "Get Oranges",completed: true, id: 0}),
    createTodo({text: "Get Carrots",completed: false, id: 0}),
];
console.log("initialTodos: ", initialTodos)
