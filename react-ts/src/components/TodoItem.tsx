import React from "react"
import styles from './TodoItem.module.css'

interface ITodoItem {
    text: string;
    onRemove: () => void;
}

const TodoItem = ({text, onRemove}:ITodoItem) => {
    return (  
        <li className = {styles.item} onClick = {onRemove} >{text}</li>
    )
}

export default TodoItem