  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./App.css"


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
      todos: [...this.state.todos, newTodo],
      task: ""
    });
  };

  markComplete = (todo) => {
    todo.completed = !todo.completed
    this.setState({ completed: todo.completed })
    if(todo.completed === true){
    }
  }

  clearCompleted = event => {
    event.preventDefault();
    if(this.state.completed === true){
     this.setState({ todos: [...this.state.todos.filter(todo => todo.completed === false)]})
    }
  }

  render() {
    return (
      <div className="container">
        <div className="app">
          <h1>Todos</h1>
          <TodoForm
          todoHandler={this.todoHandler}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          />
          <TodoList markComplete={this.markComplete} todos={this.state.todos} />

        </div>

      </div>

    );
  }
}

export default App;
