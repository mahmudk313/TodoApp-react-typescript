import React, { useState } from 'react';
import Todo from '../../models/todo';
import EditTodo from './editTodo';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { deleteTodo } from '../../store/todoSlice';

interface Props{
    todo : Todo,
}

const TodoItem : React.FC<Props> = ({ todo }) => {

    const dispatch = useDispatch<AppDispatch>()
    const [editStatus, setEditStatus] = useState<boolean>(false)

    const deleteHandler = () => {
        dispatch(deleteTodo(todo.id))
    }

    return(

        !editStatus
            ? <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        {todo.title}
                    </div>
                    <div>
                        <button type="button" className="btn btn-info btn-sm" onClick={() => setEditStatus(true)}>edit</button>
                        <button type="button" className="btn btn-danger btn-sm ms-1" onClick={deleteHandler}>delete</button>
                        <button type="button" className={`btn ${todo.is_done ? "btn-warning" : "btn-success"} btn-sm ms-1`} /*onClick={() => toggleTodoDone(todo.id)}*/>{`${todo.is_done ? "Undone" : "Done"}`}</button>
                    </div>
                </div>
            </div>
            : <EditTodo todo={todo} setEditStatus={setEditStatus} />
            
    )
}


export default TodoItem;