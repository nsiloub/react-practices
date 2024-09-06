// TODO: Fix the mutations using non-mutative methods 

import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TaskList from './components/TaskList';

export type TodosType = {
  id: number,
  title: string,
  done: boolean
}[];

const initialTodos: TodosType = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export type UpdateTodoTypes = React.ChangeEvent<HTMLInputElement> | 
    React.MouseEvent<HTMLButtonElement>
    

export default function TaskApp(): React.JSX.Element{
  const [todos, setTodos] = useState( initialTodos );
  const nextId = (todos.length - 1) + 1;

  function handleAddTodoClick(title: string): void {
    const nextTodos = todos.concat({
      id: nextId,
      title: title,
      done: false
    });
    setTodos(nextTodos)
  };

  function handleDeleteButtonClick(todoId: number): void {
    const nextTodos = todos.filter((todo) => {
      return todo.id !== todoId
    });

    setTodos(nextTodos);
  };

  // Handler for multiple events
  function handleUpdateTodos(e: UpdateTodoTypes, todoId: number): void {
    const target = e.target as HTMLButtonElement | HTMLInputElement;
    const fieldType = target.type;

    let nextTodos = [...todos];

    nextTodos = todos.map((todo) => {
      if(todoId  === todo.id) {
        switch(fieldType) {
          //for syncronizing  the todo  done state with the checkbox
          case "checkbox": 
            return {
              ...todo,
              done: !todo.done
            }
            // for syncronizing the todo title change with input field 
            case "text": 
              return {
                ...todo,
                title: target.value
              }
              default:
                return todo
              }
            } else {
              return todo
            }
          })
          
          
    // For syncronizing the local todo as a new todo in the state
    if(fieldType === "submit") {
      nextTodos = [...todos, {
        id: nextId,
        title: target.value,
        done: false
      }]
    }
          


    setTodos(nextTodos);
  };
  return( 
    <>
      <AddTodo
        onAddTodo={(title) => handleAddTodoClick(title)}
      />
      <TaskList
        todoList={todos}
        onDeleteTodo={(id) => handleDeleteButtonClick(id)}
        onUpdateTodo={handleUpdateTodos}
      />
    </>
  )
};