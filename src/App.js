  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  todoHandler = event => {
    this.setState({ task: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = event => {
    if(this.state.completed === true){
      //Some code
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
        todoHandler={this.todoHandler}
        addTodo={this.addtodo}
        clearCompleted={this.clearCompleted}
        task={this.props.task}
        id={this.props.id}
        completed={this.props.completed}
       />
      </div>
    );
  }
}

export default App;
