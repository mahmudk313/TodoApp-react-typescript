import React, { useState } from 'react';
import Todo from '../../models/todo';
import EditTodo from './editTodo';

interface Props{
    todo : Todo,
    deleteTodo : ( id: number) => void,
    editTodo : (id : number, value : string) => void,
    toggleTodoDone : (id : number) => void,
}

const TodoItem : React.FC<Props> = ({ todo, deleteTodo, editTodo, toggleTodoDone }) => {

    const [editStatus, setEditStatus] = useState<boolean>(false)

    return(

        !editStatus
            ? <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        {todo.title}
                    </div>
                    <div>
                        <button type="button" className="btn btn-info btn-sm" onClick={() => setEditStatus(true)}>edit</button>
                        <button type="button" className="btn btn-danger btn-sm ms-1" onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button type="button" className={`btn ${todo.is_done ? "btn-warning" : "btn-success"} btn-sm ms-1`} onClick={() => toggleTodoDone(todo.id)}>{`${todo.is_done ? "Undone" : "Done"}`}</button>
                    </div>
                </div>
            </div>
            : <EditTodo todo={todo} editTodo={editTodo} setEditStatus={setEditStatus} />
            
    )
}


export default TodoItem;