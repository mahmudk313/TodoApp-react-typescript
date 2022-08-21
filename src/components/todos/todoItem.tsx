import React, { useState } from 'react';
import Todo from '../../models/todo';
import EditTodo from './editTodo';

interface Props{
    todo : Todo,
    deleteTodo : ( id: number) => void,
}

const TodoItem : React.FC<Props> = ({ todo, deleteTodo }) => {

    const [editStatus, setEditStatus] = useState<boolean>(false)

    return(

        !editStatus
            ?
                <div className="col-6 mb-2">
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            {todo.title}
                        </div>
                        <div>
                            <button type="button" className="btn btn-info btn-sm">edit</button>
                            <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => deleteTodo(todo.id)}>delete</button>
                        </div>
                    </div>
                </div>
            :
                <EditTodo todo={todo} />
            
    )
}


export default TodoItem;