import React, { Dispatch, SetStateAction, useState } from "react";
import Todo from "../../models/todo";

interface Props {
    todo : Todo,
    editTodo : (id : number, value : string) => void,
    setEditStatus : Dispatch<SetStateAction<boolean>>
}

const EditTodo : React.FC<Props> = ({ todo, editTodo, setEditStatus }) => {

    const [input, setInput] = useState<string>(todo.title);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        editTodo(todo.id, input);
        setInput("");
        setEditStatus(false);
    }

    return(
        <form onSubmit={submitHandler} className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input type="text" onChange={inputHandler} value={input} />
                </div>
                <div>
                    <button type="submit" className="btn btn-info btn-sm">edit</button>
                </div>
            </div>
        </form>
    )
}

export default EditTodo;