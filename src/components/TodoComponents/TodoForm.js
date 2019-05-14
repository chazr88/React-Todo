import React from 'react'

function TodoForm(props) {
    return (
        <form>
            <input 
            type="text"
            value={props.task}
            placeholder="task"
            name="task"
            onChange={props.todoHandler}
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm


