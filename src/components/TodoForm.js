import { useState } from "react";

export const TodoForm = (props) => {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        props.addTodo(title);
        setTitle("");
    }

    return (
        <>
            <input onChange={e => setTitle(e.target.value)} value={title}/>
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}