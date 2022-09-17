import React, { ReactNode, useState } from "react"
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

interface ContextValueProps {
  children: ReactNode;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = ({children}: ContextValueProps) => {

  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos(prevState => {
      return prevState.concat(newTodo)
    })
  }

  const deleteTodo = (todoId: string) => {
    setTodos((prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId)
    }))
  }
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodo
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider