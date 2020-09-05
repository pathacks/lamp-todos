import { h, Component } from "preact";
import "./style";

export default class App extends Component {
  // React's state object - anything you use from here in render will get automatically updated
  state = {
    text: "",
    todos: ["Laundry", "Groceries"],
  };

  // This function updates the 'text' part of the state object above
  updateText = (event) => {
    this.setState({ text: event.target.value });
  };

  // This function updates the 'todos' part of the state object above
  addToList = (event) => {
    if (event.key === "Enter") {
      this.setState({
        todos: [...this.state.todos, event.target.value],
      });
    }
  };

  // React's way of creating the HTML tree
  render() {
    return (
      <main>
        <input
          id="todoInput"
          value={this.state.text}
          // onInput is basically the same as document.getElementById('todoInput').addEventListener('input', () => {})
          onInput={this.updateText}
          // onKeyDown is basically the same as document.getElementById('todoInput').addEventListener('keydown', () => {})
          onKeyDown={this.addToList}
        />
        <ul>
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {/* React will listen to changes in 'todos' and loop through each item in it and render an li for it */}
          {this.state.todos.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </main>
    );
  }
}
