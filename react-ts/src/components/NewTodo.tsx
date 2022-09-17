import { useRef, useContext } from "react"
import { TodosContext } from "../store/todos-context"
import styles from './NewTodo.module.css'

const NewTodo = () => {

    const todoCtx = useContext(TodosContext)

    const todoInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent ) => {
        event.preventDefault()

        const entereredText = todoInputRef.current!.value
        if (entereredText.trim().length === 0){
            //throw an error
            return;
        }

        todoCtx.addTodo(entereredText)
    }

    return <form onSubmit={submitHandler} className = {styles.form}>
        <label htmlFor="text">Todo Text</label>
        <input type='text' id="text" ref = {todoInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo