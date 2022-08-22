import React, { Dispatch, SetStateAction, useState } from "react";
import Todo from "../../models/todo";

import { useDispatch } from 'react-redux';
import { editTodo } from "../../store/todoSlice";
import { AppDispatch } from "../../store";

interface Props {
    todo : Todo,
    setEditStatus : Dispatch<SetStateAction<boolean>>
}

const EditTodo : React.FC<Props> = ({ todo, setEditStatus }) => {

    const dispatch = useDispatch<AppDispatch>()
    const [input, setInput] = useState<string>(todo.title);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if(input !== "") {
            dispatch(
                editTodo(
                    {
                        id: todo.id,
                        text: input
                    }
                )
            )
            setInput("");
            setEditStatus(false);
        }
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