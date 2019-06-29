import React from "react";
import ReactDOM from "react-dom";
import Input from './Components/Input.jsx'
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/todos')
      .then((response) => {
        console.log(response.data);
        this.setState({todos: response.data})
      })
      .catch((err) => {
        console.log('Error getting todos onMount')
      })
  }

  onChange(e) {
    this.setState({input:e.target.value});
  }

  onSubmit() {
    console.log('Button Clicked!')
    axios.post('http://localhost:3000/todos', {'task': this.state.input})
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Error posting data to database')
      })
  }

  render() {

    return (
      <div>
        <div>I'm so lonely without anything to complete</div>
        <Input onChange={this.onChange} onSubmit={this.onSubmit}/>
      </div>
      )
  };
}

ReactDOM.render(<App />, document.getElementById("app"));
