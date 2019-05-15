import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props);
        super(props);
        this.style = {
            textDecoration: 'line-through'
        }
    }

    lineItem() {
        if (this.props.todo.completed === true) {
            return(
                <div style={this.style} onClick={this.props.markComplete.bind(this, this.props.todo)} >{this.props.todo.task}</div>
            )
        } else {
            return(
                <div onClick={this.props.markComplete.bind(this, this.props.todo)} >{this.props.todo.task}</div>
            )
        }
    }

    render() {
 
        return (
            <div>
                {this.lineItem()}
            </div>
        )

    }
}


export default Todo
