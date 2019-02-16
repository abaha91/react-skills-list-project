import React, { Component } from 'react';
import Header from "./Header-component/header-component";
import TodoSkills from "./Todo-skills-component/todo-skills-component";
import ReadySkills from "./Ready-skills-component/ready-skills-component";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <div className="todo-lists--wrapper">
          <TodoSkills />
          <ReadySkills />
        </div>
      </div>
    );
  }
}

export default App;
