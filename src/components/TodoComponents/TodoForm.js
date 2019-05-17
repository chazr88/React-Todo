import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: 'task'
        }
    }
    render(){
        return (
            <div className="form-div">
                <form>
                    <input 
                    type="text"
                    value={this.props.task}
                    placeholder="Task"
                    name="task"
                    onChange={this.props.todoHandler}
                    />
                    <button onClick={this.props.addTodo}>Add Todo</button>
                    <button onClick={this.props.clearCompleted}>Clear Completed</button>
                </form>
            </div>

        )
    }
    
}

export default TodoForm


