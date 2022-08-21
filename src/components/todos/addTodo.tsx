import React, { useState } from "react";

const AddTodo : React.FC = () => {

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