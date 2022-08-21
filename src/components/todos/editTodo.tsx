import React, { useState } from "react";
import Todo from "../../models/todo";

interface Props {
    todo : Todo,
}

const EditTodo : React.FC<Props> = ({ todo }) => {
    return(
        <form className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                </div>
                <div>
                    <button type="submit" className="btn btn-info btn-sm">edit</button>
                </div>
            </div>
        </form>
    )
}

export default EditTodo;