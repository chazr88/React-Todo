import React from 'react'

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: 'task'
        }
    }
    render(){
        return (
            <form>
                <input 
                type="text"
                value={this.props.task}
                placeholder="task"
                name="task"
                onChange={this.props.todoHandler}
                />
                <button onClick={this.props.addTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
    
}

export default TodoForm


