import "./App.css";

import React, { Component } from "react";
import Home from "./Home";
class App extends Component {
  state = { count: 0, show: false, text:'' ,finalText:'' };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecriment = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };
  handleChange = (e) => {
    this.setState({...this.state,text: e.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({...this.state,finalText:this.state.text});
  }
  render() {
    return (
      <>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleDecriment}>-</button>
        </div>
        <button onClick={this.handleShow}> SHOW</button>
        {this.state.show && <Home />}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button type="submit">submit</button>
        </form>
        <h2>{this.state.finalText}</h2>
      </>
    );
  }
}

export default App;
