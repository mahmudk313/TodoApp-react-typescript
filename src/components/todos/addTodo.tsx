import React, { useState, Dispatch, SetStateAction } from "react";
import Todo from "../../models/todo";

interface Props {
    add: Dispatch<SetStateAction<Todo[]>>
}

const AddTodo : React.FC<Props> = ({ add }) => {

    const [input , setinput] = useState<string>("");

    return(
        <div className="form-inline">
            <div className="form-group d-flex">
            <input type="text" onChange={(e) => setinput(e.target.value)} value={input} className="form-control mx-sm-3" placeholder="i want to do ..."/>
            <button className="btn btn-primary">add</button>
            </div>
        </div>
    );
}

export default AddTodo;