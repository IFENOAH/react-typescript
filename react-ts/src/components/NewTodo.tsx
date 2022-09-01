import { useRef } from "react"
import styles from './NewTodo.module.css'

interface INewTodo {
    onAddTodo: (text: string) => void
}

const NewTodo = ({onAddTodo}:INewTodo) => {

    const todoInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent ) => {
        event.preventDefault()

        const entereredText = todoInputRef.current!.value
        if (entereredText.trim().length === 0){
            //throw an error
            return;
        }

        onAddTodo(entereredText)
    }

    return <form onSubmit={submitHandler} className = {styles.form}>
        <label htmlFor="text">Todo Text</label>
        <input type='text' id="text" ref = {todoInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo