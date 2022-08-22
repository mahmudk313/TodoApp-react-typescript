import React, { useState, Dispatch, SetStateAction } from "react";
import Todo from "../../models/todo";

const AddTodo : React.FC = () => {

    const [input , setInput] = useState<string>("");

    const submitHandler = (e : React.FormEvent) => {
        e.preventDefault();
        if(input !== "") {

            setInput("")
        }
    }

    return(
        <form onSubmit={submitHandler} className="form-inline mb-4">
            <div className="form-group d-flex">
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className="form-control mx-sm-3" placeholder="i want to do ..."/>
            <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    );
}

export default AddTodo;