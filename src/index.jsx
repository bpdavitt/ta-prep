import React from "react";
import ReactDOM from "react-dom";
import Input from './Components/Input.jsx'
import axios from 'axios';
import Todos from './Components/Todos.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get('http://localhost:3000/todos')
      .then((response) => {
        // console.log(response.data);
        this.setState({ todos: response.data })
      })
      .catch((err) => {
        console.log('Error getting todos onMount')
      })
  }

  //Monitors input textbox for changes
  onChange(e) {
    this.setState({ input: e.target.value });
  }

  //Fires when submit button is clicked
  onSubmit() {
    console.log('Button Clicked!')
    axios.post('http://localhost:3000/todos', { 'task': this.state.input })
      .then((response) => {
        console.log(response.data);
        this.getTodos();
      })
      .catch((err) => {
        console.log('Error posting data to database')
      })
  }

  //Toggles ToDo status between complete and incomplete
  toggleStatus(item) {
    //Toggle completed status
    item.completed === 0 ? item.completed = 1 : item.completed = 0;
    axios.put('http://localhost:3000/todos', item)
      .then((response) => {
        // console.log(response);
        this.getTodos();
      })
      .catch((err) => {
        console.log('Error updating completion status for: ', item)
      })
  }

  deleteItem(item) {
    console.log('About to delete: ', item);
    axios.delete(`http://localhost:3000/todos:${item.id}`)
      .then((response) => {
        console.log(response);
        this.getTodos();
      })
      .catch((err) => {
        console.log('Error deleting a ToDo: ', item)
      })
  }

  render() {

    return (
      <div>
        <div>I'm so lonely without anything to complete</div>
        <Input onChange={this.onChange} onSubmit={this.onSubmit} />
        <Todos allTodos={this.state.todos} toggleStatus={this.toggleStatus} deleteItem={this.deleteItem} />
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("app"));
