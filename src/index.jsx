import React from "react";
import ReactDOM from "react-dom";
import Input from './Components/Input.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({input:e.target.value});
  }

  onSubmit() {
    console.log('Button Clicked!')
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
