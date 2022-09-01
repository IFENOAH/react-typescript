import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'
import styles from './Todos.module.css'

const Todos: React.FC<{items: Todo[], onDeleteTodo: (id:string) => void }> = (props) => {

  return (
   <ul className={styles.todos}>
    {props.items.map(item => 
      <TodoItem key = {item.id} text = {item.text} onRemove = {props.onDeleteTodo.bind(null, item.id)} />
    )}
   </ul>
  )
}

export default Todos