import React, { Component } from 'react';
import './App.scss';
import Header from "./Header-component/header-component";
import TodoSkills from "./Todo-skills-component/todo-skills-component";
import ReadySkills from "./Ready-skills-component/ready-skills-component";
import NewSkill from "./New-skill-component/new-skill-component";
import { createStore } from 'redux'

let state = {
    tasks: ['Научиться работать с Redux', 'Promises, Async/Await', 'Выполнить все задачи из статьи', 'Проект TODO'],
    readyTasks: ['Webpack', 'Поработать с NodeJS', 'Методы массивов JS'],
};

function appState (state = state, action) {
  switch (action.type) {
    case 'TO_ADD_SKILL':
      return state + 1;
    case 'TO_REMOVE_SKILL':
      return state - 1;
    case 'TO_READY_SKILL':
      return state - 1;
    case 'TO_UNREADY_SKILL':
      return state - 1;
    default:
      return state
  }
}

let store = createStore(appState);
store.subscribe(() => console.log(store.getState()));

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = state;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="todo-lists--wrapper">
          <TodoSkills skills={this.state.tasks}/>
          <ReadySkills skills={this.state.readyTasks}/>
        </div>
        <NewSkill />
      </div>
    );
  }
}

export default App;
