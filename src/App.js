import React, { Component } from 'react';
import './App.scss';
import Header from "./Header-component/header-component";
import TodoSkills from "./Todo-skills-component/todo-skills-component";
import ReadySkills from "./Ready-skills-component/ready-skills-component";
import NewSkill from "./New-skill-component/new-skill-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="todo-lists--wrapper">
          <TodoSkills />
          <ReadySkills />
        </div>
        <NewSkill />
      </div>
    );
  }
}

export default App;
